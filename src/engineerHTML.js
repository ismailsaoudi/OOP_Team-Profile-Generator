function engineerHTML(engineer){
    return `  <div class="col-sm-4 my-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">ENGINEER</h5>
        <ul class="list-group">
          <li class="list-group-item">name: ${engineer.name}</li>
          <li class="list-group-item">id:  ${engineer.id}</li>
          <li class="list-group-item"><a href="mailto: ${engineer.email}">Email: ${engineer.email}</a></li>
          <li class="list-group-item"> <a href="https://github.com/${engineer.GitHub}" class="stretched-link">Github: ${engineer.GitHub}</a></li>
           
        </ul>
      </div>
    </div>
  </div>`
}

module.exports=engineerHTML