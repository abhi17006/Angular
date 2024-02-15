import { Component } from '@angular/core';
import { LoggingService } from '../service/logging.service';
import { AccountsService } from '../service/accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrl: './new-account.component.css',
  providers:[LoggingService]
})
export class NewAccountComponent {

 

  constructor(private loggingService: LoggingService,
              private accountService: AccountsService){
  }
  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName,accountStatus);
    this.loggingService.logStatushange(accountStatus);
  }
}
