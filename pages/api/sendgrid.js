import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

console.log(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
      var carpetnames = req.body.subject.carpetnames;
      var heights = req.body.subject.heights;
      var widths = req.body.subject.widths;
      var areas = req.body.subject.areas;
    console.log("REQ.BODY", req.body);
    await sendgrid.send({
      to: "sayat.kaldarbekov.00@gmail.com", // Your email where you'll receive emails
      from: "kosynka@1hokage.ru", // your website email address here
      subject: `Заказ от ${req.body.subject.username} ${req.body.subject.phone}`,
      html: `
      <body>
        <h1>Заказ от ${req.body.subject.username}</h1>
        <h3>Сумма заказа: <b>${req.body.subject.sum}</b> тг</h3>
        <h3 style="padding-bottom: 10px;">Доп информация: ${req.body.subject.text}</h3>
        <div style="padding-bottom: 10px;">Детали:</div>

        <table border="3" id="table">
          <thead id="head">
            <tr>
              <th scope="col">Ковер</th>
              <th scope="col">Длина, м</th>
              <th scope="col">Ширина, м</th>
              <th scope="col">Площадь, м2</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>${carpetnames[0]}</td>
              <td>${heights[0]}</td>
              <td>${widths[0]}</td>
              <td>${areas[0]}</td>
            </tr>
            <tr>
              <td>${carpetnames[1]}</td>
              <td>${heights[1]}</td>
              <td>${widths[1]}</td>
              <td>${areas[1]}</td>
            </tr>
            <tr>
              <td>${carpetnames[2]}</td>
              <td>${heights[2]}</td>
              <td>${widths[2]}</td>
              <td>${areas[2]}</td>
            </tr>
            <tr>
              <td>${carpetnames[3]}</td>
              <td>${heights[3]}</td>
              <td>${widths[3]}</td>
              <td>${areas[3]}</td>
            </tr>
            <tr>
              <td>${carpetnames[4]}</td>
              <td>${heights[4]}</td>
              <td>${widths[4]}</td>
              <td>${areas[4]}</td>
            </tr>
            <tr>
              <td>${carpetnames[5]}</td>
              <td>${heights[5]}</td>
              <td>${widths[5]}</td>
              <td>${areas[5]}</td>
            </tr>
            <tr>
              <td>${carpetnames[6]}</td>
              <td>${heights[6]}</td>
              <td>${widths[6]}</td>
              <td>${areas[6]}</td>
            </tr>
            <tr>
              <td>${carpetnames[7]}</td>
              <td>${heights[7]}</td>
              <td>${widths[7]}</td>
              <td>${areas[7]}</td>
            </tr>
            <tr>
              <td>${carpetnames[8]}</td>
              <td>${heights[8]}</td>
              <td>${widths[8]}</td>
              <td>${areas[8]}</td>
            </tr>
            <tr>
              <td>${carpetnames[9]}</td>
              <td>${heights[9]}</td>
              <td>${widths[9]}</td>
              <td>${areas[9]}</td>
            </tr>
            <tr>
              <td>${carpetnames[10]}</td>
              <td>${heights[10]}</td>
              <td>${widths[10]}</td>
              <td>${areas[10]}</td>
            </tr>
          </tbody>
          </table>
      </body>
      `,
    });
  } catch (error) {
    console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "Email sent" });
}

export default sendEmail;

{/* <script>
          function addTable() {
            var data = carpetnames;
          
            var table = document.getElementById('table');

            var tableBody = document.createElement('tbody');
            table.appendChild(tableBody);

            for (var i = 0; i < data[0].length; i++) {
              var tr = document.createElement('tr');
              tableBody.appendChild(tr);

              for (var j = 0; j < data.length; j++) {
                var td = document.createElement('td');
                td.width = '90';
                td.appendChild(document.createTextNode(data[j][i]));
                tr.appendChild(td);
              }
            }
            
            myTableDiv.appendChild(table);
          }
          addTable();
        </script> */}