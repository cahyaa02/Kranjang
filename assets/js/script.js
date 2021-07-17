const scriptURL =
    "https://script.google.com/macros/s/AKfycbzjWwvjJihKz3-24SxEnHM5XFjNPgQd_dv3uD_fgjLSp_4AAXsC6IC4C_ECvWyLkGsuBg/exec";
const form = document.forms["recyclerization-contact-form"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".my-alert");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    // ketika tombol submit diklik
    // tampilkan tombol loading, hilangkan tombol kirim
    btnLoading.classList.toggle("d-none");
    btnKirim.classList.toggle("d-none");
    fetch(scriptURL, {
            method: "POST",
            body: new FormData(form),
        })
        .then((response) => {
            // tampilkan tombol kirim, hilangkan tombol loading
            btnLoading.classList.toggle("d-none");
            btnKirim.classList.toggle("d-none");
            // tampilkan alert
            myAlert.classList.toggle("d-none");
            // reset formnya
            form.reset();
            console.log("Success!", response);
        })
        .catch((error) => console.error("Error!", error.message));
});

// Code injected by live - server
if ("WebSocket" in window) {
    (function () {
        function refreshCSS() {
            var sheets = [].slice.call(document.getElementsByTagName("link"));
            var head = document.getElementsByTagName("head")[0];
            for (var i = 0; i < sheets.length; ++i) {
                var elem = sheets[i];
                var parent = elem.parentElement || head;
                parent.removeChild(elem);
                var rel = elem.rel;
                if (
                    (elem.href && typeof rel != "string") ||
                    rel.length == 0 ||
                    rel.toLowerCase() == "stylesheet"
                ) {
                    var url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, "");
                    elem.href =
                        url +
                        (url.indexOf("?") >= 0 ? "&" : "?") +
                        "_cacheOverride=" +
                        new Date().valueOf();
                }
                parent.appendChild(elem);
            }
        }
        var protocol =
            window.location.protocol === "http:" ? "ws://" : "wss://";
        var address =
            protocol + window.location.host + window.location.pathname + "/ws";
        var socket = new WebSocket(address);
        socket.onmessage = function (msg) {
            if (msg.data == "reload") window.location.reload();
            else if (msg.data == "refreshcss") refreshCSS();
        };
        if (
            sessionStorage &&
            !sessionStorage.getItem("IsThisFirstTime_Log_From_LiveServer")
        ) {
            console.log("Live reload enabled.");
            sessionStorage.setItem("IsThisFirstTime_Log_From_LiveServer", true);
        }
    })();
} else {
    console.error(
        "Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading."
    );
    const scriptURL =
        "https://script.google.com/macros/s/AKfycbzjWwvjJihKz3-24SxEnHM5XFjNPgQd_dv3uD_fgjLSp_4AAXsC6IC4C_ECvWyLkGsuBg/exec";
    const form = document.forms["recyclerization-contact-form"];
    const btnKirim = document.querySelector(".btn-kirim");
    const btnLoading = document.querySelector(".btn-loading");
    const myAlert = document.querySelector(".my-alert");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        // ketika tombol submit diklik
        // tampilkan tombol loading, hilangkan tombol kirim
        btnLoading.classList.toggle("d-none");
        btnKirim.classList.toggle("d-none");
        fetch(scriptURL, {
                method: "POST",
                body: new FormData(form),
            })
            .then((response) => {
                // tampilkan tombol kirim, hilangkan tombol loading
                btnLoading.classList.toggle("d-none");
                btnKirim.classList.toggle("d-none");
                // tampilkan alert
                myAlert.classList.toggle("d-none");
                // reset formnya
                form.reset();
                console.log("Success!", response);
            })
            .catch((error) => console.error("Error!", error.message));
    });

    // Code injected by live - server
    if ("WebSocket" in window) {
        (function () {
            function refreshCSS() {
                var sheets = [].slice.call(document.getElementsByTagName("link"));
                var head = document.getElementsByTagName("head")[0];
                for (var i = 0; i < sheets.length; ++i) {
                    var elem = sheets[i];
                    var parent = elem.parentElement || head;
                    parent.removeChild(elem);
                    var rel = elem.rel;
                    if (
                        (elem.href && typeof rel != "string") ||
                        rel.length == 0 ||
                        rel.toLowerCase() == "stylesheet"
                    ) {
                        var url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, "");
                        elem.href =
                            url +
                            (url.indexOf("?") >= 0 ? "&" : "?") +
                            "_cacheOverride=" +
                            new Date().valueOf();
                    }
                    parent.appendChild(elem);
                }
            }
            var protocol =
                window.location.protocol === "http:" ? "ws://" : "wss://";
            var address =
                protocol + window.location.host + window.location.pathname + "/ws";
            var socket = new WebSocket(address);
            socket.onmessage = function (msg) {
                if (msg.data == "reload") window.location.reload();
                else if (msg.data == "refreshcss") refreshCSS();
            };
            if (
                sessionStorage &&
                !sessionStorage.getItem("IsThisFirstTime_Log_From_LiveServer")
            ) {
                console.log("Live reload enabled.");
                sessionStorage.setItem("IsThisFirstTime_Log_From_LiveServer", true);
            }
        })();
    } else {
        console.error(
            "Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading."
        );
    }
}