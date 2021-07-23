import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AgentesTablaComponent } from './agentes-tabla/agentes-tabla.component'

@Injectable()

export class CommonModelService {
    animal: string;
    name: string;
    date1: any;
    date2: any
    constructor(public dialog: MatDialog) { }

    openDialog(algo: any): Observable<any> {
        const dialogRef = this.dialog.open(AgentesTablaComponent, {
            width: '100%',
            maxWidth: '956px',
            height: 'auto',
            hasBackdrop: true,
            maxHeight: '700px',
            data: {
                rutIn: algo,
                secuenciaIn: algo,
            }
        });

        return dialogRef.afterClosed();
    }
}