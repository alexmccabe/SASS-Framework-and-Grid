SASS-Framework-and-Grid
=======================

I created a SASS framework and grid system for use on future projects. I will probably expand on it over time. 

##Grid System

The grid is configurable, but is set up to start with a 12 column layout. The columns require a parent container with the class `.row` and in turn, that should have (but is not required), a parent container with the class `.container`. The grid system is fully responsive.

For example: 

    <div class="container">
      <div class="row">
        <div class="col-3">col-3</div>
        <div class="col-3">col-3</div>
        <div class="col-3">col-3</div>
        <div class="col-3">col-3</div>
      </div>
    </div>
    
Would produce a four column row with the width of each item set to 25%.

If you want to have a column by itelf, and center-aligned to the page just add the class `.col-center` to the column.

####Customising the Grid

You can change the amount of columns the grid has in the `_base.scss` file. If you do this however, you will have to change the breakpoint styles in the `_grids.scss` partial.


##Globals

There are lots of global classes you can add to any element to change how they appear on the page

    .clearfix {	@extend %clearfix; }


    .is-hidden { display: none !important; }
    .is-invisible { visibility: none !important; }
    .is-transparent { opacity: 0 !important; }


    .block { display: !important; }
    .inline { display: !important; }
    .inline-block { display: !important; }


    .left { float: left !important; }
    .right { float: right !important; }


    .text-left {text-align: left !important; }
    .text-center {text-align: center !important; }
    .text-right {text-align: right !important; }
    
##Typography
Many typography defaults have been set in the `_typography` partial. These change the way text looks on the page on an individual basis and are all class-based. There are no default styles for headers, paragraphs, links or lists by the tag alone. Headers should be classed like so `<h2 class="h2">...</h2>`. The reason for this is it provides great customisation abilities. 

If you have a sidebar and require a `h2`, but the styles set for this make it too large, you can apply any other heading class. For example: `<h2 class="h4">...</h2>`

####The Typography Class
For pages that will have many of the above mentioned tags, apply the `.tyopgrahpy` class to the container parent and all child elements will inherit the correct classes.
