 function mobileTab() {
        let bars = document.getElementById("bars");
        let cancel = document.getElementById("cancel");
        let mobile_nav = document.getElementById("mobile_button");
        bars.style.display = "none";
        cancel.style.display = "initial";
        mobile_nav.style.display = "initial";
      }

      function mobileTabClose() {
        let bars = document.getElementById("bars");
        let cancel = document.getElementById("cancel");
        let mobile_nav = document.getElementById("mobile_button");
        bars.style.display = "initial";
        cancel.style.display = "none";
        mobile_nav.style.display = "none";
      }

    