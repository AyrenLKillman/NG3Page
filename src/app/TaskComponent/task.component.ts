import { Component, Input} from "@angular/core";
import { UserComponent } from "./task/taskz.component";



@Component({
    selector: "app-task",
    standalone: true,
    imports: [UserComponent],
    templateUrl: "./task.component.html",
    styleUrl: "./task.component.css"
})
export class TaskComponent {
    @Input() name?: string;
}
