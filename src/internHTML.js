function internHTML(intern){
    return `  <div class="col-sm-4 my-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">INTERN</h5>
        <ul class="list-group">
          <li class="list-group-item">name: ${intern.name}</li>
          <li class="list-group-item">id:  ${intern.id}</li>
          <li class="list-group-item"><a href="mailto: ${intern.email}">Email: ${intern.email}</a></li>
          <li class="list-group-item"> <a href="https://github.com/${intern.GitHub}" class="stretched-link">Github: ${intern.GitHub}</a></li>
           
        </ul>
      </div>
    </div>
  </div>`
}

module.exports=internHTML