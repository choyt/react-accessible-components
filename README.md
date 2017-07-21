# Installation
```
1. npm install
2. npm start
3. visit localhost:3000
4. that's it
```

## Linting
```
npm -g install prettier
prettier --single-quote --trailing-comma es5 --write "{src,__{tests,mocks}__}/**/*.js"
```

This project was created to provide a set of components which conform to the latest recommendations made by the WAI-ARIA accessibility group. The recommendations followed can be found here: http://w3c.github.io/aria/aria/aria.html

# Definitions of States and Properties (all aria-* attributes)
- aria-activedescendant
  - Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.
- aria-atomic
Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.
- aria-autocomplete
Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be presented if they are made.
- aria-busy
Indicates an element is being modified and that assistive technologies may want to wait until the modifications are complete before exposing them to the user.
- aria-checked
Indicates the current "checked" state of checkboxes, radio buttons, and other widgets. See related aria-pressed and aria-selected.
- aria-colcount
[ARIA 1.1] Defines the total number of columns in a table, grid, or treegrid. See related aria-colindex.
- aria-colindex
[ARIA 1.1] Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid. See related aria-colcount and aria-colspan.
- aria-colspan
[ARIA 1.1] Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid. See related aria-colindex and aria-rowspan.
- aria-controls
Identifies the element (or elements) whose contents or presence are controlled by the current element. See related aria-owns.
- aria-current
[ARIA 1.1] Indicates the element that represents the current item within a container or set of related elements.
- aria-describedby
Identifies the element (or elements) that describes the object. See related aria-labelledby.
- aria-details
[ARIA 1.1] Identifies the element that provides a detailed, extended description for the object. See related aria-describedby.
- aria-disabled
Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable. See related aria-hidden and aria-readonly.
- aria-errormessage
[ARIA 1.1] Identifies the element that provides an error message for the object. See related aria-invalid and aria-describedby.
- aria-expanded
Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.
- aria-flowto
Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion, allows assistive technology to override the general default of reading in document source order.
- aria-haspopup
[ARIA 1.1] Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.
- aria-hidden
Indicates whether the element is exposed to an accessibility API. See related aria-disabled.
- aria-invalid
Indicates the entered value does not conform to the format expected by the application. See related aria-errormessage.
- aria-keyshortcuts
[ARIA 1.1] Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.
- aria-label
Defines a string value that labels the current element. See related aria-labelledby.
- aria-labelledby
Identifies the element (or elements) that labels the current element. See related aria-describedby.
- aria-level
Defines the hierarchical level of an element within a structure.
- aria-live
Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.
- aria-modal
[ARIA 1.1] Indicates whether an element is modal when displayed.
- aria-multiline
Indicates whether a text box accepts multiple lines of input or only a single line.
- aria-multiselectable
Indicates that the user may select more than one item from the current selectable descendants.
- aria-orientation
Indicates whether the element and orientation is horizontal, vertical, or undefined.
- aria-owns
Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship between DOM elements where the DOM hierarchy cannot be used to represent the relationship. See related aria-controls.
- aria-placeholder
[ARIA 1.1] Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value. A hint could be a sample value or a brief description of the expected format.
- aria-posinset
Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM. See related aria-setsize.
- aria-pressed
Indicates the current "pressed" state of toggle buttons. See related aria-checked and aria-selected.
- aria-readonly
Indicates that the element is not editable, but is otherwise operable. See related aria-disabled.
- aria-relevant
Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified. See related aria-atomic.
- aria-required
Indicates that user input is required on the element before a form may be submitted.
- aria-roledescription
[ARIA 1.1] Defines a human-readable, author-localized description for the role of an element.
- aria-rowcount
[ARIA 1.1] Defines the total number of rows in a table, grid, or treegrid. See related aria-rowindex.
- aria-rowindex
[ARIA 1.1] Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid. See related aria-rowcount and aria-rowspan.
- aria-rowspan
[ARIA 1.1] Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid. See related aria-rowindex and aria-colspan.
- aria-selected
Indicates the current "selected" state of various widgets. See related aria-checked and aria-pressed.
- aria-setsize
Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM. See related aria-posinset.
- aria-sort
Indicates if items in a table or grid are sorted in ascending or descending order.
- aria-valuemax
Defines the maximum allowed value for a range widget.
- aria-valuemin
Defines the minimum allowed value for a range widget.
- aria-valuenow
Defines the current value for a range widget. See related aria-valuetext.
- aria-valuetext
Defines the human readable text alternative of aria-valuenow for a range widget.

# Definition of Roles
- alert
A type of live region with important, and usually time-sensitive, information. See related alertdialog and status.
- alertdialog
A type of dialog that contains an alert message, where initial focus goes to an element within the dialog. See related alert and dialog.
- application
A structure containing one or more focusable elements requiring user input, such as keyboard or gesture events, that do not follow a standard interaction pattern supported by a widget role.
- article
A section of a page that consists of a composition that forms an independent part of a document, page, or site.
- banner
A region that contains mostly site-oriented content, rather than page-specific content.
- button
An input that allows for user-triggered actions when clicked or pressed. See related link.
- cell
[ARIA 1.1] A cell in a tabular container. See related gridcell.
- checkbox
A checkable input that has three possible values: true, false, or mixed.
- columnheader
A cell containing header information for a column.
- combobox
A composite widget containing a single-line textbox and another element, such as a listbox or grid, that can dynamically pop up to help the user set the value of the textbox.
- command (abstract role)
A form of widget that performs an action but does not receive input data.
- complementary
A supporting section of the document, designed to be complementary to the main content at a similar level in the DOM hierarchy, but remains meaningful when separated from the main content.
- composite (abstract role)
A widget that may contain navigable descendants or owned children.
- contentinfo
A large perceivable region that contains information about the parent document.
- definition
A definition of a term or concept. See related term.
- dialog
A dialog is a descendant window of the primary window of a web application. For HTML pages, the primary application window is the entire web document, i.e., the body element.
- directory
A list of references to members of a group, such as a static table of contents.
- document
An element containing content that assistive technology users may want to browse in a reading mode.
- feed
[ARIA 1.1] A scrollable list of articles where scrolling may cause articles to be added to or removed from either end of the list.
- figure
[ARIA 1.1] A perceivable section of content that typically contains a graphical document, images, code snippets, or example text. The parts of a figure may be user-navigable.
- form
A landmark region that contains a collection of items and objects that, as a whole, combine to create a form. See related search.
- grid
A composite widget containing a collection of one or more rows with one or more cells where some or all cells in the grid are focusable by using methods of two-dimensional navigation, such as directional arrow keys.
- gridcell
A cell in a grid or treegrid.
- group
A set of user interface objects which are not intended to be included in a page summary or table of contents by assistive technologies.
- heading
A heading for a section of the page.
- img
A container for a collection of elements that form an image.
- input (abstract role)
A generic type of widget that allows user input.
- landmark (abstract role)
A perceivable section containing content that is relevant to a specific, author-specified purpose and sufficiently important that users will likely want to be able to navigate to the section easily and to have it listed in a summary of the page. Such a page summary could be generated dynamically by a user agent or assistive technology.
- link
An interactive reference to an internal or external resource that, when activated, causes the user agent to navigate to that resource. See related button.
- list
A section containing listitem elements. See related listbox.
- listbox
A widget that allows the user to select one or more items from a list of choices. See related combobox and list.
- listitem
A single item in a list or directory.
- log
A type of live region where new information is added in meaningful order and old information may disappear. See related marquee.
- main
The main content of a document.
- marquee
A type of live region where non-essential information changes frequently. See related log.
- math
Content that represents a mathematical expression.
- menu
A type of widget that offers a list of choices to the user.
- menubar
A presentation of menu that usually remains visible and is usually presented horizontally.
- menuitem
An option in a set of choices contained by a menu or menubar.
- menuitemcheckbox
A menuitem with a checkable state whose possible values are true, false, or mixed.
- menuitemradio
A checkable menuitem in a set of elements with the same role, only one of which can be checked at a time.
- navigation
A collection of navigational elements (usually links) for navigating the document or related documents.
- none
[ARIA 1.1] An element whose implicit native role semantics will not be mapped to the accessibility API. See synonym presentation [ARIA 1.0].
- note
A section whose content is parenthetic or ancillary to the main content of the resource.
- option
A selectable item in a select list.
- presentation
An element whose implicit native role semantics will not be mapped to the accessibility API. See synonym none [ARIA 1.1].
- progressbar
An element that displays the progress status for tasks that take a long time.
- radio
A checkable input in a group of elements with the same role, only one of which can be checked at a time.
- radiogroup
A group of radio buttons.
- range (abstract role)
An input representing a range of values that can be set by the user.
- region
A perceivable section containing content that is relevant to a specific, author-specified purpose and sufficiently important that users will likely want to be able to navigate to the section easily and to have it listed in a summary of the page. Such a page summary could be generated dynamically by a user agent or assistive technology.
- roletype (abstract role)
The base role from which all other roles in this taxonomy inherit.
- row
A row of cells in a tabular container.
- rowgroup
A structure containing one or more row elements in a tabular container.
- rowheader
A cell containing header information for a row in a grid.
- scrollbar
A graphical object that controls the scrolling of content within a viewing area, regardless of whether the content is fully displayed within the viewing area.
- search
A landmark region that contains a collection of items and objects that, as a whole, combine to create a search facility. See related form and searchbox.
- searchbox
[ARIA 1.1] A type of textbox intended for specifying search criteria. See related textbox and search.
- section (abstract role)
A renderable structural containment unit in a document or application.
- sectionhead (abstract role)
A structure that labels or summarizes the topic of its related section.
- select (abstract role)
A form widget that allows the user to make selections from a set of choices.
- separator
A divider that separates and distinguishes sections of content or groups of menuitems.
- slider
A user input where the user selects a value from within a given range.
- spinbutton
A form of range that expects the user to select from among discrete choices.
- status
A type of live region whose content is advisory information for the user but is not important enough to justify an alert, often but not necessarily presented as a status bar.
- structure (abstract role)
A document structural element.
- switch
[ARIA 1.1] A type of checkbox that represents on/off values, as opposed to checked/unchecked values. See related checkbox.
- tab
A grouping label providing a mechanism for selecting the tab content that is to be rendered to the user.
- table
[ARIA 1.1] A section containing data arranged in rows and columns. See related grid.
- tablist
A list of tab elements, which are references to tabpanel elements.
- tabpanel
A container for the resources associated with a tab, where each tab is contained in a tablist.
- term
[ARIA 1.1] A word or phrase with a corresponding definition. See related definition.
- textbox
A type of input that allows free-form text as its value.
- timer
A type of live region containing a numerical counter which indicates an amount of elapsed time from a start point, or the time remaining until an end point.
- toolbar
A collection of commonly used function buttons or controls represented in compact visual form.
- tooltip
A contextual popup that displays a description for an element.
- tree
A type of list that may contain sub-level nested groups that can be collapsed and expanded.
- treegrid
A grid whose rows can be expanded and collapsed in the same manner as for a tree.
- treeitem
An option item of a tree. This is an element within a tree that may be expanded or collapsed if it contains a sub-level group of tree item elements.
- widget (abstract role)
An interactive component of a graphical user interface (GUI).
- window (abstract role)
A browser or application window.