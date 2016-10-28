import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-dashboard1',
  templateUrl: './dashboard1.component.html',
  styleUrls: ['./dashboard1.component.css']
})
export class Dashboard1Component implements OnInit {

  lineChart : morris.GridChart;
  areaChart : morris.GridChart;
  donutChart: morris.DonutChart;
  knob: JQuery;
  calendar: JQuery;


  ngAfterViewInit(){

  }

  ngOnInit() {
    this.areaChart = Morris.Area({
        element: 'revenue-chart',
        resize: true,
        data: [
          {y: '2011 Q1', item1: 2666, item2: 2666},
          {y: '2011 Q2', item1: 2778, item2: 2294},
          {y: '2011 Q3', item1: 4912, item2: 1969},
          {y: '2011 Q4', item1: 3767, item2: 3597},
          {y: '2012 Q1', item1: 6810, item2: 1914},
          {y: '2012 Q2', item1: 5670, item2: 4293},
          {y: '2012 Q3', item1: 4820, item2: 3795},
          {y: '2012 Q4', item1: 15073, item2: 5967},
          {y: '2013 Q1', item1: 10687, item2: 4460},
          {y: '2013 Q2', item1: 8432, item2: 5713}
        ],
        xkey: 'y',
        ykeys: ['item1', 'item2'],
        labels: ['Item 1', 'Item 2'],
        lineColors: ['#a0d0e0', '#3c8dbc'],
        hideHover: 'auto'
    });

    this.lineChart = Morris.Line({
      element: 'line-chart',
      resize: true,
      data: [
        {y: '2011 Q1', item1: 2666},
        {y: '2011 Q2', item1: 2778},
        {y: '2011 Q3', item1: 4912},
        {y: '2011 Q4', item1: 3767},
        {y: '2012 Q1', item1: 6810},
        {y: '2012 Q2', item1: 5670},
        {y: '2012 Q3', item1: 4820},
        {y: '2012 Q4', item1: 15073},
        {y: '2013 Q1', item1: 10687},
        {y: '2013 Q2', item1: 8432}
      ],
      xkey: 'y',
      ykeys: ['item1'],
      labels: ['Item 1'],
      lineColors: ['#efefef'],
      lineWidth: 2,
      hideHover: 'auto',
      gridTextColor: "#fff",
      //gridStrokeWidth: 0.4,
      pointSize: 4,
      pointStrokeColors: ["#efefef"],
      //gridLineColor: "#efefef",
      gridTextFamily: "Open Sans",
      gridTextSize: 10
    });

    this.donutChart = Morris.Donut({
      element: 'sales-chart',
      resize: true,
      colors: ["#3c8dbc", "#f56954", "#00a65a"],
      data: [
        {label: "Download Sales", value: 12},
        {label: "In-Store Sales", value: 30},
        {label: "Mail-Order Sales", value: 20}
      ],
      //hideHover: 'auto'
    });

    this.knob = jQuery(".knob").knob();
    this.calendar = jQuery("#calendar").datepicker();

    jQuery(".connectedSortable").sortable({
      placeholder: "sort-highlight",
      connectWith: ".connectedSortable",
      handle: ".box-header, .nav-tabs",
      forcePlaceholderSize: true,
      zIndex: 999999
    });
    jQuery(".connectedSortable .box-header, .connectedSortable .nav-tabs-custom").css("cursor", "move");

    jQuery(".todo-list").sortable({
      placeholder: "sort-highlight",
      handle: ".handle",
      forcePlaceholderSize: true,
      zIndex: 999999
    });
    
  }

}
