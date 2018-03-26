// Type definitions for AdminLTE v0.1
// TypeScript Version: 2.3

/// <reference types="jquery"/>

declare namespace layout{

}

interface LayoutOptions {
	slimscroll?: boolean;
	resetHeight?: boolean;
}

interface AdminLTELayout{
  activate();
}

interface JQuery {
  layout(options?: LayoutOptions): JQuery;
  layout(command: string): JQuery;
}
