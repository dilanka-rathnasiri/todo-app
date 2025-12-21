import { Component, input, InputSignal } from '@angular/core';

@Component({
    selector: 'app-status-badge',
    imports: [],
    templateUrl: './status-badge.html',
})
export class StatusBadge {
    isCompleted: InputSignal<boolean> = input.required<boolean>();
}
