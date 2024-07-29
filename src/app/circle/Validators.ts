import { AbstractControl,ValidationErrors } from "@angular/forms";

export function domainValidators(control:AbstractControl):any{

    if( control.value?.includes('@ltimindtree.com')){
        return null;
    }
    else{
        return {'domainValidator':'Invalid domain'};
    }
}