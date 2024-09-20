import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class projectChose{

    private projectChoseService: BehaviorSubject<Object> = new BehaviorSubject({})

    setInfoProject(project:Object){
        this.projectChoseService.next(project)
    }

    getInfoProject(){
        return this.projectChoseService.asObservable()
    }

}