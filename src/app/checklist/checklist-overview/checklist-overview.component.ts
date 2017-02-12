import { Component, OnInit } from '@angular/core';
import { CheckListItemsService } from '../shared/services/check-list-items.service';
import { CheckListItem } from '../models/CheckListItem';

@Component({
  selector: 'app-checklist-overview',
  templateUrl: './checklist-overview.component.html',
  styleUrls: ['./checklist-overview.component.css']
})
export class ChecklistOverviewComponent implements OnInit {

  checkListItems: CheckListItem[];
  selectedCheckListItem: CheckListItem;

  constructor(private checkListItemsService: CheckListItemsService) { }

  ngOnInit() {
    this.checkListItemsService.getCheckListItems()
      .subscribe(checkListItems => {
        this.checkListItems = checkListItems;
      });
  }

  selectCheckListItem(CheckListItem) {
    this.selectedCheckListItem = CheckListItem;
  }

  addCheckListItem(title, task) {
    let newCheckListItem = new CheckListItem();
    newCheckListItem.title = title;
    newCheckListItem.task = task;

    this.checkListItemsService.createCheckListItem(newCheckListItem)
      .subscribe(
        newCheckListItem => this.checkListItems.push(newCheckListItem),
        err => console.log('FOUT:', err),
        () => console.log('succes handler')
      );
  }

  updateCheckListItem(CheckListItem: CheckListItem) {
    this.checkListItemsService.updateCheckListItem(CheckListItem)
      .subscribe(
        res => res,
        err => console.log('error:', err),
        () => this.selectedCheckListItem = null
      );
  }

  toggleCheckListItemFinished(CheckListItem) {
    CheckListItem.finished = !CheckListItem.finished;
    this.checkListItemsService.updateCheckListItem(CheckListItem)
      .subscribe(
        res => res,
        err => console.log('error:', err),
        () => this.selectedCheckListItem = null
      );
  }

  deleteCheckListItem(CheckListItem: CheckListItem) {
    this.checkListItems = this.checkListItems.filter(cli => cli.id !== CheckListItem.id);
    this.checkListItemsService.deleteCheckListItem(CheckListItem)
      .subscribe(
        res => res,
        err => console.log('FOUT:', err),
        () => console.log('succes handler')
      );
  }
}
