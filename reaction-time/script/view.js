updateView();
function updateView() {
  let html = /* html */ `
    <h1>Reaksjonstid</h1>
    <div class="center">
        <div class="main-container">
            <div id="myLamps" class="center"></div>
            <p id="reactionTime"></p>
        </div>
    </div>
  `;
  app.innerHTML = html;
}
