import { Component, Input, Output, EventEmitter} from "@angular/core";



@Component({
    selector: "app-user",
    standalone: true,
    imports: [],
    templateUrl: "./user.component.html",
    styleUrl: "./user.component.css"
})
export class UserComponent {

    @Input({required: true}) id!: string;
    @Input({required: true}) avatar!: string;
    @Input({required: true}) name!: string;
    @Output() select = new EventEmitter<string>();


//!this commented code is for signals
    // avatar = input.required<string>();
    // name = input.required<string>();
    // imagePath = computed(() => {
    //     return 'Assets/users/' + this.avatar();
    // });
    get imagePath() {
        return 'Assets/users/' + this.avatar;
    }


    onSelectUser() {
        this.select.emit(this.id);
    }

}