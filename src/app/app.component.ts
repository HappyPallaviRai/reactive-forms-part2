import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  projectStatus = ["Stable", "Critical", "Finished"];
  projectForm = new FormGroup({
    name: new FormControl(
      null,
      [Validators.required],
      this.forbiddenProjectName
    ),
    email: new FormControl(null, [Validators.required, Validators.email]),
    status: new FormControl("Stable"),
  });
  OnSubmit() {
    console.log(this.projectForm.value);
  }

  // forbiddenProjectName(control: FormControl): { [s: string]: boolean } {
  //   if (control.value === "Test") return { forbidden: true };
  //   else return null;
  // }

  forbiddenProjectName(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === "Test") resolve({ forbidden: true });
        else resolve(null);
      }, 1500);
    });
    return promise;
  }
}
