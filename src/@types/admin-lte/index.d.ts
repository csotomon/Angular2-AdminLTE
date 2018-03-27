// Type definitions for AdminLTE v0.1
// TypeScript Version: 2.6.2

/// <reference types="jquery"/>

interface LayoutOptions {
	slimscroll?: boolean;
	resetHeight?: boolean;
}

interface JQuery {
  layout(options?: LayoutOptions): JQuery;
  layout(command: string): JQuery;
}
