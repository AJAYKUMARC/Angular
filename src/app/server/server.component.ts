import {Component }  from '@angular/core'

@Component ({
    selector:'app-server',
    templateUrl:'./server.component.html',
    styles:[`
    colour:red
    `]    
})

export class ServerComponent
{

ServerName='131 Server';
buttonVisibulity=true;
constructor() {
    setTimeout(() => {
        this.buttonVisibulity=false
    }, 10000);
}
buttonClick(event:any)
{
    this.ServerName='New Server';
}

}