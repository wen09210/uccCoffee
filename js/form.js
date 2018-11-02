    function sendform(){
      function hasClass(element, cls) {
          return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
      }
      

      var check = document.getElementById('sendform_btn');
      if(hasClass(check, 'disabled')){
        return false;
      }
      else{
        $.get("https://script.google.com/macros/s/AKfycbx7ViYt_QdpCMsnwkxS26Fy9rawP7k5zC1J4QOOYQhDkQgaGCY_/exec", {
                    "Name": document.getElementById("NameInput").value,
                    "Phone": document.getElementById("PhoneInput").value,
                    "Email": document.getElementById("EmailInput").value,
                    "Job": document.getElementById("JobInput").value,
                    "Sex": document.getElementById("SexInput").value,
                    "Age": document.getElementById("AgeInput").value,
                    "City": document.getElementById("CityInput").value,
                    "Taste": document.getElementById("TasteInput").value
                },
                function (data) {

                });
          swal(
            '恭喜您',
            '已成功獲取抽獎資格',
            'success'
          )
          ga('send', 'event', '填寫表單', '活動一(請你喝咖啡)', '參加活動');
          $('#CoffeeDraw').modal('hide');

      }

    }

    function sendform2(){
      function hasClass(element, cls) {
          return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
      }

      var check = document.getElementById('sendform_btn2');

      if(hasClass(check, 'disabled')){
        return false;
      }
      else{
        $.get("https://script.google.com/macros/s/AKfycbz0ZipqLMuPk-8R374MFr3Js0BPNLySeEjuOjyaVXuOZUrVy-BQ/exec", {
                    "Invoice": document.getElementById("InvoiceInput").value,
                    "Name": document.getElementById("Name2Input").value,
                    "Phone": document.getElementById("Phone2Input").value,
                    "Email": document.getElementById("Email2Input").value
                },
                function (data) {

                });
          swal(
            '恭喜您',
            '已成功獲取抽獎資格',
            'success'
          );
          ga('send', 'event', '填寫表單', '活動三(登錄發票抽)', '參加活動');
          $('#CoffeeDraw3').modal('hide');
      }

    }