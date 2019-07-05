$(() => {
    const obj = {
        "home": "http://www.smdpc2sd.gov.in/index",
        "smdp-1": "http://www.smdpc2sd.gov.in/smdp1outcome",
        "smdp-2": "http://www.smdpc2sd.gov.in/smdp2outcome",
        "smdp-c2sd": "http://www.smdpc2sd.gov.in/smdp_c2sd",
        "institutes": "http://www.smdpc2sd.gov.in/clusters",
        "investigators": "http://www.smdpc2sd.gov.in/ciscocis",
        "prsg members": "http://www.smdpc2sd.gov.in/revcomprsg",
        "tac members": "http://www.smdpc2sd.gov.in/revcomtac",
        "nsc members": "http://www.smdpc2sd.gov.in/revcomnsc",
        "instruction enhancement programmes": "http://www.smdpc2sd.gov.in/iep_materials",
        "international guest faculty lectures": "http://www.smdpc2sd.gov.in/igf_lectures",
        "short term courses": "http://www.smdpc2sd.gov.in/stc_materials",
        "other materials": "http://www.smdpc2sd.gov.in/other_materials",
        "model syllabus": "http://www.smdpc2sd.gov.in/downloads/Model_Syllabus.pdf",
        "10bestdesigns": "http://www.smdpc2sd.gov.in/india_chip_program",
        "internship intel": "http://www.smdpc2sd.gov.in/intel",
        "internship mentor": "http://www.smdpc2sd.gov.in/mentor",
        "internship nxp": "http://www.smdpc2sd.gov.in/nxp",
        "vacancy": "http://www.smdpc2sd.gov.in/recruitment",
        "contact": "http://www.smdpc2sd.gov.in/contactus"
    }

    const sendBtn = $('#send-btn')
    const msgBox = $("#msg-box")
    const chatbot = $('#chatbot')
    const openBtn = $('#open-btn')
    // const body = $('body')
    const arr = []
    let show = false

    chatbot.hide()

    openBtn.click(() => {
        console.log('openbtn clicked' + show)
        show = true
        chatbot.show()
        openBtn.hide()
    })

    // body.click(() => {
    //     console.log('body clicked' + show)
    //     if (show) {
    //         chatbot.hide()
    //         openBtn.show()
    //     }
    // })

    sendBtn.click(() => {

        const msgInputValue = $('#msg-input').val().toLowerCase()
        $('#msg-input').val('')
        arr.push(`me ${msgInputValue}`)
        refreshMsg()

        if (obj[msgInputValue]) {
            arr.push(`bot ${obj[msgInputValue]}`)
        } else {
            arr.push("err Try something else.")
        }
        setTimeout(() => {
            refreshMsg()
        }, 200)

    })

    function refreshMsg() {

        const msg = arr[arr.length - 1]
        if (msg.startsWith("me")) {
            msgBox.append(`
            <div class="me-msg">
                <div class="ml-auto">
                    ${msg.substring(3)}
                </div>
            </div>`)
        } else if (msg.startsWith("err")) {
            msgBox.append(`
            <div class="bot-msg ml-2">
                ${msg.substring(4)}
            </div>`)
        }
        else {
            msgBox.append(`
            <div class="bot-msg ml-2">
                <a href="${msg.substring(4)}" target="_blank">CLICK HERE TO OPEN</a> 
            </div>`)
        }

    }

})