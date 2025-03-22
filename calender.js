var calendar = document.querySelector(".calendar"),
            topDiv = calendar.querySelector(".month"),
            monthDiv = calendar.querySelector("h1"),
            yearDiv = calendar.querySelector("h2"),
            dayItems = calendar.querySelector(".days"),
            prev = calendar.querySelector(".prev"),
            next = calendar.querySelector(".next"),
            years = new Date().getFullYear(),
            monthes = new Date().getMonth(),
            lastDayofMonth = new Date(new Date(new Date().setMonth(monthes + 1)).setDate(0)).getDate(),
            daysOfFirstDateOfMonth = new Date(new Date(new Date().setMonth(monthes)).setDate(1)).getDay(),
            monthNames = [
                "January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
            ],
            colors = [
                "#FFA549", "#ABABAB", "#1DABBB", "#953163", "#E7DF86",
                "#E01931", "#92F22A", "#FEC606", "#563D28", "#9E58DC",
                "#48AD01", "#0EBB9F"
            ],
            i, counter;

        function days(x) {
            dayItems.innerHTML = "";
            monthes = monthes + x;

            if (monthes > 11) {
                years = years + 1;
                monthes = 0;
            }
            if (monthes < 0) {
                years = years - 1;
                monthes = 11;
            }

            lastDayofMonth = new Date(new Date(new Date().setFullYear(years)).setMonth(monthes + 1)).setDate(0);
            lastDayofMonth = new Date(lastDayofMonth).getDate();

            daysOfFirstDateOfMonth = new Date(new Date(new Date().setFullYear(years)).setMonth(monthes)).setDate(1);
            daysOfFirstDateOfMonth = new Date(daysOfFirstDateOfMonth).getDay();

            yearDiv.innerHTML = years;
            monthDiv.innerHTML = monthNames[monthes];

            for (i = 0; i < daysOfFirstDateOfMonth; i++) {
                dayItems.innerHTML += "<li> - </li>";
            }

            for (counter = 1; counter <= lastDayofMonth; counter++) {
                dayItems.innerHTML += "<li>" + counter + "</li>";
            }

            topDiv.style.background = colors[monthes];
            dayItems.style.background = colors[monthes];

            if (monthes === new Date().getMonth() && years === new Date().getFullYear()) {
                dayItems.children[new Date().getDate() + daysOfFirstDateOfMonth - 1].style.background = "#2ecc71";
            }
        }

        prev.onclick = function() {
            days(-1);
        };

        next.onclick = function() {
            days(1);
        };

        days(0);