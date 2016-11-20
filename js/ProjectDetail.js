jQuery(document).ready(function($){
   $('.panel').pwstabs({
       // scale, slideleft, slideright, slidetop, slidedown
      effect: 'slidedown', 
 
      // The tab to be opened by default
      defaultTab: 1,    
 
      // Set custom container width
      // Any size value (1,2,3.. / px,pt,em,%,cm..)
      containerWidth: '85%',

      // Tabs position: horizontal / vertical
      tabsPosition: 'horizontal',
 
      // Tabs horizontal position: top / bottom
      horizontalPosition: 'top',

 
      // Right to left support: true/ false
      rtl: false

 
   });        
});