const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')
var server = require('http').createServer()
var io = require('socket.io')(server)
const sudo = require('sudo-prompt')
const exec = require('child_process').exec

let win

var start = function(socket, ssid, password) {
    sudo.exec('netsh wlan set hostednetwork mode=allow ssid="' + ssid + '" key="'+ password + '" & netsh wlan start hostednetwork', {name: 'Windows Share Network'}, function(err, out) {
        if(socket != undefined) {
            (err == null) ? socket.emit('EndLoading', true) : socket.emit('EndLoading', false)
        }
    })
}

var stop = function(socket) {
    exec('netsh wlan stop hostednetwork', function(err, out) {
        if(socket != undefined) {
            (err == null) ? socket.emit('EndLoading', false) : socket.emit('EndLoading', true)
        }
    })
}

function createWindow () {
    win = new BrowserWindow({
        width: 415,
        height: 550,
        backgroundColor: '#23252C',
        center: true,
        resizable: false,
        title: 'Partage de connexion Windows',
        frame: false
    })

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }))

    // win.webContents.openDevTools()
    stop()

    win.on('closed', () => {
        stop()
        setTimeout(function() {
            win = null
        }, 500)
    })

    server.listen(7878);

    function handler (req, res) {
        res.writeHead(500, {"Content-Type": "text/plain"})
        res.end('[[ Interdit ]]')
    }

    io.on('connection', function(socket) {

        var debug = function(item) {
            socket.emit('debug', item)
        }

        socket.on('NewWifi', function(wifi) {
            start(socket, wifi.ssid, wifi.password)
        })

        socket.on('StopWifi', function(val) {
            (val) ? stop(socket) : null
        })

        socket.on('Minimize', function(val) {
            (val) ? win.minimize() : null;
        })

    })

}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        stop()
        app.quit()
    }
})

app.on('activate', () => {
    if (win === null) {
        createWindow()
    }
})