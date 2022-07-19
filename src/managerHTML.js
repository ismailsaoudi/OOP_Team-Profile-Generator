function managerHTML(manager){
    return `  <div class="col-sm-4 my-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">MANAGER</h5>
        <ul class="list-group">
          <li class="list-group-item">name: ${manager.name}</li>
          <li class="list-group-item">id:  ${manager.id}</li>
          <li class="list-group-item"><a href="mailto:${manager.email}">Email: ${manager.email}</a></li>
          <li class="list-group-item"> <a href="tel:${manager.officeNumber}">OfficeNumber: ${manager.officeNumber}</a></li>
           
        </ul>
      </div>
    </div>
  </div>`
}

module.exports=managerHTML