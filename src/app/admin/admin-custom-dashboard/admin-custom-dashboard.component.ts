import { Component, OnInit } from '@angular/core';
import { } from 'jquery';
import { } from 'morris.js';
import { } from 'jquery-knob';
import { } from 'bootstrap-datepicker';
import { } from 'jqueryui';
import { } from 'daterangepicker';
import { } from 'jquery.slimscroll';
import * as moment from 'moment';
import { Http, Headers, Response } from '@angular/http';
import { AdminCustomDashboardService} from './admin-custom-dashboard.service';
import {Observable} from 'rxjs/Observable';

// Variable in assets/js/scripts.js file
declare var AdminLTE: any;

@Component({
  selector: 'app-admin-custom-dashboard',
  templateUrl: './admin-custom-dashboard.component.html',
  providers: [AdminCustomDashboardService],
  styleUrls: ['./admin-custom-dashboard.component.css']
})
export class AdminCustomDashboardComponent implements OnInit {
  loading = false;
  linechart: morris.GridChart;
  getdata: string;
  parsedata: any;
  areaChart: morris.GridChart;
  donutChart: morris.DonutChart;
  barchart: morris.GridChart;
  knob: JQuery;
  calendar: JQuery;
  url = 'http://localhost/api.php?action=query&list=usercheck&format=json';
  private resultjson: any;
  private usercheck: string;

  // public getdata$: Observable<any>;



  constructor(/*private _http: Http*/private adminCustomDashboardService: AdminCustomDashboardService) { }
  ngOnInit() {
    // this.getdata$ = this.adminCustomDashboardService.getValues();
    //
    // console.log(this.getdata$);

    // Update the AdminLTE layouts
    AdminLTE.init();
    // Make the dashboard widgets sortable Using jquery UI
    jQuery('.connectedSortable').sortable({
      placeholder: 'sort-highlight',
      connectWith: '.connectedSortable',
      handle: '.box-header, .nav-tabs',
      forcePlaceholderSize: true,
      zIndex: 999999
    });
    jQuery('.connectedSortable .box-header, .connectedSortable .nav-tabs-custom').css('cursor', 'move');

    // jQuery UI sortable for the todo list
    jQuery('.todo-list').sortable({
      placeholder: 'sort-highlight',
      handle: '.handle',
      forcePlaceholderSize: true,
      zIndex: 999999
    });

    // bootstrap WYSIHTML5 - text editor
    // jQuery('.textarea').wysihtml5();

    jQuery('.daterange').daterangepicker({
      ranges: {
        'Today': [moment(), moment()],
        'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
        'Last 7 Days': [moment().subtract(6, 'days'), moment()],
        'Last 30 Days': [moment().subtract(29, 'days'), moment()],
        'This Month': [moment().startOf('month'), moment().endOf('month')],
        'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
      },
      startDate: moment().subtract(29, 'days'),
      endDate: moment()
    }, function (start, end) {
      // window.alert('You chose:  ' + this.start.format('MMMM D, YYYY') + ' - ' + this.end.format('MMMM D, YYYY'));
    });


    this.knob = jQuery('.knob').knob();
    this.calendar = jQuery('#calendar').datepicker();

    // SLIMSCROLL FOR CHAT WIDGET
    jQuery('#chat-box').slimScroll({
      height: '250px'
    });




    this.areaChart = Morris.Area({
      element: 'revenue-chart',
      resize: true,
      data: [
        { y: '2010 Q1', item1: 2666, item2: 2666 },
        { y: '2011 Q2', item1: 2778, item2: 2294 },
        { y: '2011 Q3', item1: 4912, item2: 1969 },
        { y: '2011 Q4', item1: 3767, item2: 3597 },
        { y: '2012 Q1', item1: 6810, item2: 1914 },
        { y: '2012 Q2', item1: 5670, item2: 4293 },
        { y: '2012 Q3', item1: 4820, item2: 3795 },
        { y: '2012 Q4', item1: 15073, item2: 5967 },
        { y: '2013 Q1', item1: 10687, item2: 4460 },
        { y: '2013 Q2', item1: 8432, item2: 5713 }
      ],
      xkey: 'y',
      ykeys: ['item1', 'item2'],
      labels: ['Item 1', 'Item 2'],
      lineColors: ['#a0d0e0', '#3c8dbc'],
      hideHover: 'auto'
    });

    this.donutChart = Morris.Donut({
      element: 'sales-chart',
      resize: true,
      colors: ['#3c8dbc', '#f56954', '#00a65a'],
      data: [
        { label: 'Download Sales', value: 12 },
        { label: 'In-Store Sales', value: 30 },
        { label: 'Mail-Order Sales', value: 20 }
      ],
    });


    this.linechart = Morris.Line({
      element: 'line-chart',
      resize: true,
      data: [
        {date: '2017-11-20', users_online: '20'},
        {date: '2017-11-21', users_online: '28'},
        {date: '2017-11-22', users_online: '30'},
        {date: '2017-11-23', users_online: '15'},
        {date: '2017-11-24', users_online: '23'},
        {date: '2017-11-25', users_online: '96'},
        {date: '2017-11-26', users_online: '10'},
        {date: '2017-11-27', users_online: '36'},
      ],
      xkey: 'date',
      ykeys: ['users_online'],
      labels: ['Number of times viewed'],
      lineColors: ['#efefef'],
      lineWidth: 2,
      hideHover: 'auto',
      gridTextColor: '#fff',
      gridStrokeWidth: 0.4,
      pointSize: 4,
      pointStrokeColors: ['#efefef'],
      gridLineColor: '#efefef',
      gridTextFamily: 'Open Sans',
      gridTextSize: 10
    });

    /* The todo list plugin */
    /*
    jQuery('.todo-list').todolist({
      onCheck: function (ele) {
        window.console.log('The element has been checked');
        return ele;
      },
      onUncheck: function (ele) {
        window.console.log('The element has been unchecked');
        return ele;
      }
    });*/



    this.login_admin();



  }



  login_admin() {
    this.adminCustomDashboardService.getValues().subscribe(
      data => this.getdata = JSON.stringify(data['usercheck']),
      error => alert(error),
      () => console.log('Finished')
    );

    this.parsedata = JSON.parse(this.getdata);
    // ({this.usercheck} = this.parsedata);

    this.barchart = Morris.Bar({
      element: 'article-chart',
      resize: true,
      data: this.parsedata,
      xkey: 'article_name',
      ykeys: ['times_viewed'],
      labels: ['No. of times Viewed'],
      hideHover: 'auto'
    });
  }
}
