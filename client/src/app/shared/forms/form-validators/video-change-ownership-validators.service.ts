import { I18n } from '@ngx-translate/i18n-polyfill'
import { Validators } from '@angular/forms'
import { Injectable } from '@angular/core'
import { BuildFormValidator } from '@app/shared'

@Injectable()
export class VideoChangeOwnershipValidatorsService {
  readonly USERNAME: BuildFormValidator

  constructor (private i18n: I18n) {
    this.USERNAME = {
      VALIDATORS: [ Validators.required ],
      MESSAGES: {
        'required': this.i18n('The username is required.')
      }
    }
  }
}
