import { Component, Input, Output, EventEmitter} from "@angular/core";

// type User = {
//     id: string;
//     name: string;
//     avatar: string;}

interface User {
    id: string;
    name: string;
    avatar: string;
}
@Component({
    selector: "app-user",
    standalone: true,
    imports: [],
    templateUrl: "./user.component.html",
    styleUrl: "./user.component.css"
})
export class UserComponent {

    @Input({required: true}) user!: User;
    @Output() select = new EventEmitter<string>();


//!this commented code is for signals
    // avatar = input.required<string>();
    // name = input.required<string>();
    // imagePath = computed(() => {
    //     return 'Assets/users/' + this.avatar();
    // });
    get imagePath() {
        return 'Assets/users/' + this.user.avatar;
    }


    onSelectUser() {
        this.select.emit(this.user.id);
        console.log("working")
    }

}