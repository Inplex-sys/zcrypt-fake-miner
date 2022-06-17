window['status'] = 'stopped';
class Main {
    static genRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    static genRandomString(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    static changeNetwork( selector ) {
        if ($(selector).val() == "BTC") {
            $("#props-input-network").html($("#props-input-network").html().replace('ETH', 'BTC'));
            $("#props-input-btc-amount").html(localStorage.getItem('walletValueBTC') + ' BTC');
        }else{
            $("#props-input-network").html($("#props-input-network").html().replace('BTC', 'ETH'));
            $("#props-input-btc-amount").html(localStorage.getItem('walletValueETH') + ' ETH');
        }
    }
}

class Terminal {
    static pushLogs( data ) {
        $("#props-input-terminal").html(`
            ${$("#props-input-terminal").html()}
            <div class='row'>
                <div class='col-2'>${data.status}</div>
                <div class='col-10'><p>${data.content}</p></div>
            </div>
        `)
    }
}

class Miner {
    static start( selector ) {
        window['status'] = "started"

        if ( !$(selector).hasClass("disabled") ) {
            Terminal.pushLogs({
                status: "<span class='text-primary'>[info]</span>",
                content: "<span class='text-white'>Starting miner...</span>"
            })
            setTimeout( () => {
                Terminal.pushLogs({
                    status: "<span class='text-primary'>[info]</span>",
                    content: "<span class='text-white'>Connecting to zcrypt pools network ...</span>"
                })
                setTimeout( () => {
                    Terminal.pushLogs({
                        status: "<span class='text-success'>[success]</span>",
                        content: "<span class='text-white'>Worker successfully conected to the network.</span>"
                    })
                    setTimeout( () => {
                        Worker.genBlock()
                    }, 3000)
                }, 4000)
            }, 2000)
            
            $("#button-stop").removeClass("disabled")
            $(selector).addClass("disabled")
        }
    }

    static stop( selector ) {
        window['status'] = "stopped"
        $("#button-start").removeClass("disabled")
        $("#button-stop").addClass("disabled")
        Terminal.pushLogs({
            status: "<span class='text-info'>[info]</span>",
            content: "<span class='text-white'>Miner successfully stopped...</span>"
        })
    }

    static getRandomResponse() {
        let fakeIp = `${Main.genRandomInt(0, 255).toString()}.${Main.genRandomInt(0, 255).toString()}.${Main.genRandomInt(0, 255).toString()}.${Main.genRandomInt(0, 255).toString()}`
        let fakePort = Main.genRandomInt(1000, 10000).toString()
        let fakeWinreate = `0.000000${Main.genRandomInt(100,999)}`

        let reponses = [
            {
                status: "<span class='text-danger'>[error]</span>",
                content: `<span class='text-white'>Failed to recover <b class='text-warning'>${Main.genRandomString(42)}</b> (http://${fakeIp}:${fakePort})</span>`
            },
            {
                status: "<span class='text-danger'>[error]</span>",
                content: `<span class='text-white'>Failed to recover <b class='text-warning'>${Main.genRandomString(42)}</b> (http://${fakeIp}:${fakePort})</span>`
            },
            {
                status: "<span class='text-danger'>[error]</span>",
                content: `<span class='text-white'>Failed to recover <b class='text-warning'>${Main.genRandomString(42)}</b> (http://${fakeIp}:${fakePort})</span>`
            },
            {
                status: "<span class='text-danger'>[error]</span>",
                content: `<span class='text-white'>Failed to recover <b class='text-warning'>${Main.genRandomString(42)}</b> (http://${fakeIp}:${fakePort})</span>`
            },
            {
                status: "<span class='text-danger'>[error]</span>",
                content: `<span class='text-white'>Failed to recover <b class='text-warning'>${Main.genRandomString(42)}</b> (http://${fakeIp}:${fakePort})</span>`
            },
            {
                status: "<span class='text-danger'>[error]</span>",
                content: `<span class='text-white'>Failed to recover <b class='text-warning'>${Main.genRandomString(42)}</b> (http://${fakeIp}:${fakePort})</span>`
            },
            {
                status: "<span class='text-danger'>[error]</span>",
                content: `<span class='text-white'>Failed to recover <b class='text-warning'>${Main.genRandomString(42)}</b> (http://${fakeIp}:${fakePort})</span>`
            },
            {
                status: "<span class='text-danger'>[error]</span>",
                content: `<span class='text-white'>Failed to recover <b class='text-warning'>${Main.genRandomString(42)}</b> (http://${fakeIp}:${fakePort})</span>`
            },
            {
                status: "<span class='text-danger'>[error]</span>",
                content: `<span class='text-white'>Failed to recover <b class='text-warning'>${Main.genRandomString(42)}</b> (http://${fakeIp}:${fakePort})</span>`
            },
            {
                status: "<span class='text-danger'>[error]</span>",
                content: `<span class='text-white'>Failed to recover <b class='text-warning'>${Main.genRandomString(42)}</b> (http://${fakeIp}:${fakePort})</span>`
            },
            {
                status: "<span class='text-danger'>[error]</span>",
                content: `<span class='text-white'>Failed to recover <b class='text-warning'>${Main.genRandomString(42)}</b> (http://${fakeIp}:${fakePort})</span>`
            },
            {
                status: "<span class='text-danger'>[error]</span>",
                content: `<span class='text-white'>Failed to recover <b class='text-warning'>${Main.genRandomString(42)}</b> (http://${fakeIp}:${fakePort})</span>`
            },
            {
                status: "<span class='text-danger'>[error]</span>",
                content: `<span class='text-white'>Failed to recover <b class='text-warning'>${Main.genRandomString(42)}</b> (http://${fakeIp}:${fakePort})</span>`
            },
            {
                status: "<span class='text-danger'>[error]</span>",
                content: `<span class='text-white'>Failed to recover <b class='text-warning'>${Main.genRandomString(42)}</b> (http://${fakeIp}:${fakePort})</span>`
            },
            {
                status: "<span class='text-danger'>[error]</span>",
                content: `<span class='text-white'>Failed to recover <b class='text-warning'>${Main.genRandomString(42)}</b> (http://${fakeIp}:${fakePort})</span>`
            },
            {
                status: "<span class='text-danger'>[error]</span>",
                content: `<span class='text-white'>Failed to recover <b class='text-warning'>${Main.genRandomString(42)}</b> (http://${fakeIp}:${fakePort})</span>`
            },
            {
                status: "<span class='text-danger'>[error]</span>",
                content: `<span class='text-white'>Failed to recover <b class='text-warning'>${Main.genRandomString(42)}</b> (http://${fakeIp}:${fakePort})</span>`
            },
            {
                status: "<span class='text-danger'>[error]</span>",
                content: `<span class='text-white'>Failed to recover <b class='text-warning'>${Main.genRandomString(42)}</b> (http://${fakeIp}:${fakePort})</span>`
            },
            {
                status: "<span class='text-danger'>[error]</span>",
                content: `<span class='text-white'>Failed to recover <b class='text-warning'>${Main.genRandomString(42)}</b> (http://${fakeIp}:${fakePort})</span>`
            },
            {
                status: "<span class='text-danger'>[error]</span>",
                content: `<span class='text-white'>Failed to recover <b class='text-warning'>${Main.genRandomString(42)}</b> (http://${fakeIp}:${fakePort})</span>`
            },
            {
                status: "<span class='text-danger'>[error]</span>",
                content: `<span class='text-white'>Failed to recover <b class='text-warning'>${Main.genRandomString(42)}</b> (http://${fakeIp}:${fakePort})</span>`
            },
            {
                status: "<span class='text-danger'>[error]</span>",
                content: `<span class='text-white'>Failed to recover <b class='text-warning'>${Main.genRandomString(42)}</b> (http://${fakeIp}:${fakePort})</span>`
            },
            {
                status: "<span class='text-danger'>[error]</span>",
                content: `<span class='text-white'>Failed to recover <b class='text-warning'>${Main.genRandomString(42)}</b> (http://${fakeIp}:${fakePort})</span>`
            },
            {
                status: "<span class='text-danger'>[error]</span>",
                content: `<span class='text-white'>Failed to recover <b class='text-warning'>${Main.genRandomString(42)}</b> (http://${fakeIp}:${fakePort})</span>`
            },
            {
                status: "<span class='text-danger'>[error]</span>",
                content: `<span class='text-white'>Failed to recover <b class='text-warning'>${Main.genRandomString(42)}</b> (http://${fakeIp}:${fakePort})</span>`
            },
            {
                status: "<span class='text-danger'>[error]</span>",
                content: `<span class='text-white'>Failed to recover <b class='text-warning'>${Main.genRandomString(42)}</b> (http://${fakeIp}:${fakePort})</span>`
            },
            {
                status: "<span class='text-danger'>[error]</span>",
                content: `<span class='text-white'>Failed to recover <b class='text-warning'>${Main.genRandomString(42)}</b> (http://${fakeIp}:${fakePort})</span>`
            },
            {
                status: "<span class='text-danger'>[error]</span>",
                content: `<span class='text-white'>Failed to recover <b class='text-warning'>${Main.genRandomString(42)}</b> (http://${fakeIp}:${fakePort})</span>`
            },
            {
                status: "<span class='text-danger'>[error]</span>",
                content: `<span class='text-white'>Failed to recover <b class='text-warning'>${Main.genRandomString(42)}</b> (http://${fakeIp}:${fakePort})</span>`
            },
            {
                status: "<span class='text-danger'>[error]</span>",
                content: `<span class='text-white'>Failed to recover <b class='text-warning'>${Main.genRandomString(42)}</b> (http://${fakeIp}:${fakePort})</span>`
            },
            {
                status: "<span class='text-danger'>[error]</span>",
                content: `<span class='text-white'>Failed to recover <b class='text-warning'>${Main.genRandomString(42)}</b> (http://${fakeIp}:${fakePort})</span>`
            },
            {
                status: "<span class='text-danger'>[error]</span>",
                content: `<span class='text-white'>Failed to recover <b class='text-warning'>${Main.genRandomString(42)}</b> (http://${fakeIp}:${fakePort})</span>`
            },
            {
                status: "<span class='text-danger'>[error]</span>",
                content: `<span class='text-white'>Failed to recover <b class='text-warning'>${Main.genRandomString(42)}</b> (http://${fakeIp}:${fakePort})</span>`
            },
            {
                status: "<span class='text-danger'>[error]</span>",
                content: `<span class='text-white'>Failed to recover <b class='text-warning'>${Main.genRandomString(42)}</b> (http://${fakeIp}:${fakePort})</span>`
            },
            {
                status: "<span class='text-danger'>[error]</span>",
                content: `<span class='text-white'>Failed to recover <b class='text-warning'>${Main.genRandomString(42)}</b> (http://${fakeIp}:${fakePort})</span>`
            },
            {
                status: "<span class='text-danger'>[error]</span>",
                content: `<span class='text-white'>Failed to recover <b class='text-warning'>${Main.genRandomString(42)}</b> (http://${fakeIp}:${fakePort})</span>`
            },
            {
                status: "<span class='text-danger'>[error]</span>",
                content: `<span class='text-white'>Failed to recover <b class='text-warning'>${Main.genRandomString(42)}</b> (http://${fakeIp}:${fakePort})</span>`
            },
            {
                status: "<span class='text-danger'>[error]</span>",
                content: `<span class='text-white'>Failed to recover <b class='text-warning'>${Main.genRandomString(42)}</b> (http://${fakeIp}:${fakePort})</span>`
            },
            {
                status: "<span class='text-danger'>[error]</span>",
                content: `<span class='text-white'>Failed to recover <b class='text-warning'>${Main.genRandomString(42)}</b> (http://${fakeIp}:${fakePort})</span>`
            },
            {
                status: "<span class='text-danger'>[error]</span>",
                content: `<span class='text-white'>Failed to recover <b class='text-warning'>${Main.genRandomString(42)}</b> (http://${fakeIp}:${fakePort})</span>`
            },
            {
                status: "<span class='text-danger'>[error]</span>",
                content: `<span class='text-white'>Failed to recover <b class='text-warning'>${Main.genRandomString(42)}</b> (http://${fakeIp}:${fakePort})</span>`
            },
            {
                status: "<span class='text-danger'>[error]</span>",
                content: `<span class='text-white'>Failed to recover <b class='text-warning'>${Main.genRandomString(42)}</b> (http://${fakeIp}:${fakePort})</span>`
            },
            {
                status: "<span class='text-danger'>[error]</span>",
                content: `<span class='text-white'>Failed to recover <b class='text-warning'>${Main.genRandomString(42)}</b> (http://${fakeIp}:${fakePort})</span>`
            },
            {
                status: "<span class='text-danger'>[error]</span>",
                content: `<span class='text-white'>Failed to recover <b class='text-warning'>${Main.genRandomString(42)}</b> (http://${fakeIp}:${fakePort})</span>`
            },
            {
                status: "<span class='text-danger'>[error]</span>",
                content: `<span class='text-white'>Failed to recover <b class='text-warning'>${Main.genRandomString(42)}</b> (http://${fakeIp}:${fakePort})</span>`
            },
            {
                status: "<span class='text-danger'>[error]</span>",
                content: `<span class='text-white'>Failed to recover <b class='text-warning'>${Main.genRandomString(42)}</b> (http://${fakeIp}:${fakePort})</span>`
            },
            {
                status: "<span class='text-danger'>[error]</span>",
                content: `<span class='text-white'>Failed to recover <b class='text-warning'>${Main.genRandomString(42)}</b> (http://${fakeIp}:${fakePort})</span>`
            },
            {
                status: "<span class='text-danger'>[error]</span>",
                content: `<span class='text-white'>Failed to recover <b class='text-warning'>${Main.genRandomString(42)}</b> (http://${fakeIp}:${fakePort})</span>`
            },
            {
                status: "<span class='text-danger'>[error]</span>",
                content: `<span class='text-white'>Failed to recover <b class='text-warning'>${Main.genRandomString(42)}</b> (http://${fakeIp}:${fakePort})</span>`
            },
            {
                status: "<span class='text-danger'>[error]</span>",
                content: `<span class='text-white'>Failed to recover <b class='text-warning'>${Main.genRandomString(42)}</b> (http://${fakeIp}:${fakePort})</span>`
            },
            {
                status: "<span class='text-danger'>[error]</span>",
                content: `<span class='text-white'>Failed to recover <b class='text-warning'>${Main.genRandomString(42)}</b> (http://${fakeIp}:${fakePort})</span>`
            },
            {
                status: "<span class='text-danger'>[error]</span>",
                content: `<span class='text-white'>Failed to recover <b class='text-warning'>${Main.genRandomString(42)}</b> (http://${fakeIp}:${fakePort})</span>`
            },
            {
                status: "<span class='text-danger'>[error]</span>",
                content: `<span class='text-white'>Failed to recover <b class='text-warning'>${Main.genRandomString(42)}</b> (http://${fakeIp}:${fakePort})</span>`
            },
            {
                status: "<span class='text-danger'>[error]</span>",
                content: `<span class='text-white'>Failed to recover <b class='text-warning'>${Main.genRandomString(42)}</b> (http://${fakeIp}:${fakePort})</span>`
            },
            {
                status: "<span class='text-danger'>[error]</span>",
                content: `<span class='text-white'>Failed to recover <b class='text-warning'>${Main.genRandomString(42)}</b> (http://${fakeIp}:${fakePort})</span>`
            },
            {
                status: "<span class='text-danger'>[error]</span>",
                content: `<span class='text-white'>Failed to recover <b class='text-warning'>${Main.genRandomString(42)}</b> (http://${fakeIp}:${fakePort})</span>`
            },
            {
                status: "<span class='text-danger'>[error]</span>",
                content: `<span class='text-white'>Failed to recover <b class='text-warning'>${Main.genRandomString(42)}</b> (http://${fakeIp}:${fakePort})</span>`
            },
            {
                status: "<span class='text-danger'>[error]</span>",
                content: `<span class='text-white'>Failed to recover <b class='text-warning'>${Main.genRandomString(42)}</b> (http://${fakeIp}:${fakePort})</span>`
            },
            {
                status: "<span class='text-danger'>[error]</span>",
                content: `<span class='text-white'>Failed to recover <b class='text-warning'>${Main.genRandomString(42)}</b> (http://${fakeIp}:${fakePort})</span>`
            },
            {
                status: "<span class='text-danger'>[error]</span>",
                content: `<span class='text-white'>Failed to recover <b class='text-warning'>${Main.genRandomString(42)}</b> (http://${fakeIp}:${fakePort})</span>`
            },
            {
                status: "<span class='text-danger'>[error]</span>",
                content: `<span class='text-white'>Failed to recover <b class='text-warning'>${Main.genRandomString(42)}</b> (http://${fakeIp}:${fakePort})</span>`
            },
            {
                status: "<span class='text-danger'>[error]</span>",
                content: `<span class='text-white'>Failed to recover <b class='text-warning'>${Main.genRandomString(42)}</b> (http://${fakeIp}:${fakePort})</span>`
            },
            {
                status: "<span class='text-danger'>[error]</span>",
                content: `<span class='text-white'>Failed to recover <b class='text-warning'>${Main.genRandomString(42)}</b> (http://${fakeIp}:${fakePort})</span>`
            },
            {
                status: "<span class='text-danger'>[error]</span>",
                content: `<span class='text-white'>Failed to recover <b class='text-warning'>${Main.genRandomString(42)}</b> (http://${fakeIp}:${fakePort})</span>`
            },
            {
                status: "<span class='text-danger'>[error]</span>",
                content: `<span class='text-white'>Failed to recover <b class='text-warning'>${Main.genRandomString(42)}</b> (http://${fakeIp}:${fakePort})</span>`
            },
            {
                status: "<span class='text-danger'>[error]</span>",
                content: `<span class='text-white'>Failed to recover <b class='text-warning'>${Main.genRandomString(42)}</b> (http://${fakeIp}:${fakePort})</span>`
            },
            {
                status: "<span class='text-danger'>[error]</span>",
                content: `<span class='text-white'>Failed to recover <b class='text-warning'>${Main.genRandomString(42)}</b> (http://${fakeIp}:${fakePort})</span>`
            },
            {
                status: "<span class='text-danger'>[error]</span>",
                content: `<span class='text-white'>Failed to recover <b class='text-warning'>${Main.genRandomString(42)}</b> (http://${fakeIp}:${fakePort})</span>`
            },
            {
                status: "<span class='text-danger'>[error]</span>",
                content: `<span class='text-white'>Failed to recover <b class='text-warning'>${Main.genRandomString(42)}</b> (http://${fakeIp}:${fakePort})</span>`
            },
            {
                status: "<span class='text-danger'>[error]</span>",
                content: `<span class='text-white'>Failed to recover <b class='text-warning'>${Main.genRandomString(42)}</b> (http://${fakeIp}:${fakePort})</span>`
            },
            {
                status: "<span class='text-danger'>[error]</span>",
                content: `<span class='text-white'>Failed to recover <b class='text-warning'>${Main.genRandomString(42)}</b> (http://${fakeIp}:${fakePort})</span>`
            },
            {
                status: "<span class='text-danger'>[error]</span>",
                content: `<span class='text-white'>Failed to recover <b class='text-warning'>${Main.genRandomString(42)}</b> (http://${fakeIp}:${fakePort})</span>`
            },
            {
                status: "<span class='text-danger'>[error]</span>",
                content: `<span class='text-white'>Failed to recover <b class='text-warning'>${Main.genRandomString(42)}</b> (http://${fakeIp}:${fakePort})</span>`
            },
            {
                status: "<span class='text-danger'>[error]</span>",
                content: `<span class='text-white'>Failed to recover <b class='text-warning'>${Main.genRandomString(42)}</b> (http://${fakeIp}:${fakePort})</span>`
            },
            {
                status: "<span class='text-danger'>[error]</span>",
                content: `<span class='text-white'>Failed to recover <b class='text-warning'>${Main.genRandomString(42)}</b> (http://${fakeIp}:${fakePort})</span>`
            },
            {
                status: "<span class='text-danger'>[error]</span>",
                content: `<span class='text-white'>Failed to recover <b class='text-warning'>${Main.genRandomString(42)}</b> (http://${fakeIp}:${fakePort})</span>`
            },
            {
                status: "<span class='text-danger'>[error]</span>",
                content: `<span class='text-white'>Failed to recover <b class='text-warning'>${Main.genRandomString(42)}</b> (http://${fakeIp}:${fakePort})</span>`
            },
            {
                status: "<span class='text-danger'>[error]</span>",
                content: `<span class='text-white'>Failed to recover <b class='text-warning'>${Main.genRandomString(42)}</b> (http://${fakeIp}:${fakePort})</span>`
            },
            {
                status: "<span class='text-danger'>[error]</span>",
                content: `<span class='text-white'>Failed to recover <b class='text-warning'>${Main.genRandomString(42)}</b> (http://${fakeIp}:${fakePort})</span>`
            },
            {
                status: "<span class='text-danger'>[error]</span>",
                content: `<span class='text-white'>Failed to recover <b class='text-warning'>${Main.genRandomString(42)}</b> (http://${fakeIp}:${fakePort})</span>`
            },
            {
                status: "<span class='text-danger'>[error]</span>",
                content: `<span class='text-white'>Failed to recover <b class='text-warning'>${Main.genRandomString(42)}</b> (http://${fakeIp}:${fakePort})</span>`
            },
            {
                status: "<span class='text-success'>[success]</span>",
                content: `<span class='text-white'>Worker n°${Main.genRandomInt(1,100)} -> found <b class='success'>${fakeWinreate}</b> ${$("#props-used-network").val()} .</span>`,
                amount: parseFloat(fakeWinreate)
            }
        ]

        return reponses[Main.genRandomInt(0, reponses.length - 1)];
    }

    static walletPush( value ) {
        if (localStorage.getItem("walletValue" + $("#props-used-network").val()) === null) {
            localStorage.setItem('walletValue' + $("#props-used-network").val(), value);
        }else{
            var actualAmmount = localStorage.getItem('walletValue' + $("#props-used-network").val());
            localStorage.setItem('walletValue' + $("#props-used-network").val(), (parseFloat(actualAmmount) + parseFloat(value)).toFixed(6));
            $("#props-input-btc-amount").html(localStorage.getItem("walletValue" + $("#props-used-network").val()) + ' ' + $("#props-used-network").val());
        }
    }
}

class Worker {
    static getWalletUid() {
        if (localStorage.getItem('walletUid') === null) {
            localStorage.setItem('walletUid', Main.genRandomString(42));
        }

        return localStorage.getItem('walletUid');
    }

    static genBlock() {
        for ( let i = 0; i < 50; i++ ) {
            setInterval( () => {
                if (window['status'] === "stopped") {
                    return false
                }

                var poolReponse = Miner.getRandomResponse();
                if ( poolReponse.status == "<span class='text-success'>[success]</span>" ) {
                    Miner.walletPush(poolReponse.amount);
                }

                Terminal.pushLogs(
                    poolReponse
                )

                var terminalScrollbar = document.querySelector("#props-input-terminal");
                terminalScrollbar.scrollTop = terminalScrollbar.scrollHeight - terminalScrollbar.clientHeight;

                if ($("#props-input-terminal").children().length > 100) {
                    $("#props-input-terminal").html('');
                }
            }, Main.genRandomInt(1000, 5000))
        }
    }
}

$("#props-input-network").val('BTC')
$("#props-output-zcrypt-wallet").val(Worker.getWalletUid());

if (localStorage.getItem("walletValueBTC") === null) {
    localStorage.setItem('walletValueBTC', 0)
    $("#props-input-btc-amount").html('0.00 ' + $("#props-used-network").val());
}else{
    $("#props-input-btc-amount").html(parseFloat(localStorage.getItem("walletValueBTC")) + ' ' + $("#props-used-network").val());
}

if ($("#props-used-network").val() == 'ETH') {
    if (localStorage.getItem("walletValueETH") === null) {
        localStorage.setItem('walletValueETH', 0)
        $("#props-input-btc-amount").html('0.00 ' + $("#props-used-network").val());
    }else{
        $("#props-input-btc-amount").html(parseFloat(localStorage.getItem("walletValueETH")) + ' ' + $("#props-used-network").val());
    }
}

$.ajax({
    url: 'https://api.coingecko.com/api/v3/coins/bitcoin',
    type: 'GET',
    dataType: 'json',
}).done(function(data) {
    var bitcoin = data.tickers[35].last;
    $.ajax({
        url: 'https://api.coingecko.com/api/v3/coins/ethereum',
        type: 'GET',
        dataType: 'json',
    }).done(function(data) {
        var ethereum = data.tickers[13].last;
        setInterval( () => {
            
            var btc = parseFloat(localStorage.getItem("walletValueBTC"))*bitcoin;
            var eth = parseFloat(localStorage.getItem("walletValueETH"))*ethereum;

            $("#props-euro-output").html((btc + eth).toFixed(2) + ' €');
        }, 1000)
    });
});