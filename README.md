1. npm install
2. npm start
3. visit localhost:3000
4. that's it

This project was created to provide a set of components which conform to the latest recommendations made by the WAI-ARIA accessibility group. The recommendations followed are these:

# Alert
An alert is an element that displays a brief, important message in a way that attracts the user's attention without interrupting the user's task. Dynamically rendered alerts are automatically announced by most screen readers, and in some operating systems, they may trigger an alert sound. It is important to note that, at this time, screen readers do not inform users of alerts that are present on the page before page load completes.

Because alerts are intended to provide important and potentially time-sensitive information without interfering with the user's ability to continue working, it is crucial they do not affect keyboard focus. The alert dialog is designed for situations where interrupting work flow is necessary.

It is also important to avoid designing alerts that disappear automatically. An alert that disappears too quickly can lead to failure to meet WCAG 2.0 success criterion 2.2.3. Another critical design consideration is the frequency of interruption caused by alerts. Frequent interruptions inhibit usability for people with visual and cognitive disabilities, which makes meeting the requirements of WCAG 2.0 success criterion 2.2.4 more difficult.

## Keyboard Interaction
An alert (WAI-ARIA live region) does not require any keyboard interaction.

## WAI-ARIA Roles, States, And Properties
The widget has a role of alert.

# Toggle Button
A two-state button that can be either off (not pressed) or on (pressed). To tell assistive technologies that a button is a toggle button, specify a value for the attribute aria-pressed. For example, a button labeled mute in an audio player could indicate that sound is muted by setting the pressed state true. Important: it is critical the label on a toggle does not change when its state changes. In this example, when the pressed state is true, the label remains "Mute" so a screen reader would say something like "Mute toggle button pressed". Alternatively, if the design were to call for the button label to change from "Mute" to "Unmute," the aria-pressed attribute would not be needed.

# Breadcrumb
A breadcrumb trail consists of a list of links to the parent pages of the current page in hierarchical order. It helps users find their place within a website or web application. Breadcrumbs are often placed horizontally before a page's main content.

## Keyboard Interaction
Not applicable.

## WAI-ARIA Roles, States, And Properties
* Breadcrumb trail is contained within a navigation landmark region.
* The landmark region is labelled via aria-label or aria-labelledby.
* The link to the current page has aria-current set to page. If the element representing the current page is not a link, aria-current is optional.

# Checkbox (Tri-State)
This type of checkbox supports an additional third state known as partially checked.
One common use of a tri-state checkbox can be found in software installers where a single tri-state checkbox is used to represent and control the state of an entire group of install options. And, each option in the group can be individually turned on or off with a dual state checkbox.
* If all options in the group are checked, the overall state is represented by the tri-state checkbox displaying as checked.
* If some of the options in the group are checked, the overall state is represented with the tri-state checkbox displaying as partially checked.
* If none of the options in the group are checked, the overall state of the group is represented with the tri-state checkbox displaying as not checked.

The user can use the tri-state checkbox to change all options in the group with a single action:
* Checking the overall checkbox checks all options in the group.
* Unchecking the overall checkbox will uncheck all options in the group.

And, In some implementations, the system may remember which options were checked the last time the overall status was partially checked. If this feature is provided, activating the overall checkbox a third time recreates that partially checked state where only some options in the group are checked.

## Keyboard Interaction
When the checkbox has focus, pressing the Space key changes the state of the checkbox.

## WAI-ARIA Roles, States, And Properties
* The checkbox has role checkbox.
* The checkbox has an accessible label, preferably provided by a visible label associated using aria-labelledby.
* When checked, the checkbox element has state aria-checked set to true.
* When not checked, it has state aria-checked set to false.
* When partially checked, it has state aria-checked set to mixed.
* If a set of checkboxes is presented as a logical group with a visible label, the checkboxes are included in an element with role group that has the property aria-labelledby set to the ID of the element containing the label.
* If the presentation includes additional descriptive static text relevant to a checkbox or checkbox group, the checkbox or checkbox group has the property aria-describedby set to the ID of the element containing the description.

# Combo Box
A combo box enables the user to type in a field and at the same time chose a predefined value from a list. By using the keyboard the user can select an item from the list. After selection she will be able to type further characters in the field.

## Keyboard Interaction
* Left Arrow or Right Arrow move the caret within the edit field.
* Alt + Up/Down Arrow opens and closes the list.
* Up Arrow and Down Arrow moves focus up and down the list. As focus moves inside the dropdown list, the edit field is updated.
* Page Up / Page Down selects the next/previous pages item depending on the lists size.
* Escape closes the dropdown list, returns focus to the edit field, and does not change the current selection.
* Enter selects the current item on the list, updates the edit field, highlights the selected item in the dropdown list, closes the dropdown list, and returns focus to the input field.
* Typing a letter (printable character) key moves focus to the next instance of a visible node whose title begins with that printable letter.

## WAI-ARIA Roles, States, And Properties
A combobox can be implemented using either of two design patterns:

* As a combination of text field, which may be editable, a displayable list of items, and a drop button to toggle the display of that list; all wrapped in the form of a single widget with role of combobox.
* As a combobox, which behaves like a textfield and may be editable, with a displayable list of items, and a drop button to toggle the display of that list;

Like text fields a combobox should be labeled to convey the purpose of the widget. Keyboard focus within the widget must be managed by the widget. Comboboxes are used extensively in graphical user interfaces and the design pattern for the widget should be semantically correct.

For the first combobox design pattern:
* The container element that wraps the combobox has a role of combobox.
* The first element within the combobox is an input text field and is responsible for managing the keyboard focus between the text field and the list as well as displaying the list. The text field is in the tab order. If you create a text field without using a standard HTML text field form control then ensure that it is in the tab order.
* If the text field is not editable it must have have aria-readonly = true.
* The combobox must have aria-expanded = true if the list is displayed or aria-expanded = false when it is not.
* The next element is an html <button>, or another element with a role of button. This element is used to toggle the display of the combobox's drop down list.
* The next element has a listbox role and represents the drop down list. It manages keyboard navigation among list items and navigating back to the text field if necessary.
* Each item in the listbox is an option. Options are not in the tab order.
* Provide a label for the combobox by referencing the text field in the combobox. You can use an aria-label to associate this label with the combobox or you may use the HTML <label> element and its for attribute to reference the text field.

For the second combobox design pattern:
* The first element for the combobox has a role of combobox and behaves like an input text field and is responsible for managing the keyboard focus between the combobox and the list as well as displaying the list. The text field is in the tab order. If you create a text field without using a standard HTML text field form control then ensure that it is in the tab order.
* If the combobox is not editable it must have have aria-readonly = true.
* The combobox must have aria-expanded = true if the list is displayed or aria-expanded = false when it is not.
* The next element is an html <button>, or another element with a role of button. This element is used to toggle the display of the combobox's drop down list.
* The next element has a listbox role and represents the drop down list. It manages keyboard navigation among list items and navigating back to the text field if necessary.
* Each item in the listbox is an option. Options are not in the tab order.

Provide a label for the combobox by referencing the text field in the combobox. You can use an aria-label to associate this label with the combobox or you may use the HTML <label> element and its for attribute to reference the text field.

For each combobox pattern the button need not be in the tab order if there is an appropriate keystroke associated with the input element such that when focus is on the input , the keystroke triggers display of the associated drop down list. In this case, a Tab to focus the button is unnecessary. This is the same behavior as the select element.

# Auto Complete
A text box and an associated drop-down list of choices where the choices offered are filtered based on the information typed into the box. Typically, an icon associated with the text box triggers the display of the drop-down list of choices. An editable auto-complete accepts text entry of choices that are not in the list. An example of an editable auto-complete is the URL field in the browsers.

## Keyboard Interaction
* With focus in an empty text box, press Down Arrow, Up Arrow, Alt + Down Arrow, or Alt + Up Arrow to display the entire list of choices. Focus remains in the text box and no choice is highlighted.
  * Press the Down Arrow to highlight the first choice in the list.
  * Press the Down Arrow and Up Arrow keys to highlight the desired choice in the list.
  * When a choice is highlighted using the arrow keys, the highlighted choice is displayed in the text box.
  * Press Enter to select the highlighted choice and close the drop-down list. This mimics the behavior of the HTML select element.
* With the drop-down list of choices displayed, move the mouse pointer over an item in the list to highlight it. The text box value is not modified when the mouse is used to highlight a choice. Clicking on the highlighted choice will close the drop-down and update the text box with the selected choice. This mimics the behavior of the HTML select element.
* With focus in an empty text box, type any letter. If any of the available choices begin with the letter typed, those choices are displayed in a drop down. If the letter typed does not match any of the available choices the drop-down list is not displayed.
* With focus in text box with an existing value type additional letters. As the user types letters the list of choices is filtered so that only those that begin with the typed letters are displayed.
  * Until the user presses the arrow keys to highlight a particular choice, only the typed letters are displayed in the text box.
  * In an editable auto-complete, if no choices match the letter(s) typed, the drop down list closes.
  * In a non-editable auto-complete, any letters that do not result in a match from the list are ignored. The drop down list of choices remains static until the user presses:
    * Escape to clear the text field
    * Backspace to remove some of the letters previously typed
    * an additional letter that results in a valid list of choices.
  * Navigation through the list of choices and display of the highlighted choice in the text box works as described above.
    * Optional: When a choice is highlighted via arrow key navigation, the input cursor is left at the end of the typed entry and the highlighted choice is displayed in the text box with the characters after the input cursor selected. Typing an additional character will remove the auto-completed portion and append the newly typed character to the end of the previously typed characters. The list will be filtered based on the additional character(s) typed.
* With focus in a text box, press Escape
  * If there is no text in the text box, pressing Escape closes the drop-down if it is displayed.
  * For an editable autocomplete that has text in the text box that was both typed by the user and auto-completed by highlighting a choice using the keyboard, the auto-completed portion of the text is cleared and the user typed characters remain in the text box. The drop-down list is closed. To completely clear the text box contents the user must use the backspace key to remove the typed characters. This is how the Google search box in the Firefox UI works. Recommend that pressing the Escape key again completely clears the text box rather than relying on only the backspace key.
  * For a non-editable auto-complete that has text in the text box that was both typed by the user and auto-completed by highlighting a choice using the keyboard, pressing Escape closes the drop-down list and leaves the current choice in the text box.
  * For an editable or non-editable auto complete with text in the text box that was typed by the user and the mouse is highlighting a choice in the drop down (keyboard navigation was NOT used), pressing Escape closes the drop down and leaves the typed text displayed in the text box. Need to consider if pressing Escape again should clear the typed text. The user must press the Down arrow or Alt + Down arrow or click the associated icon to invoke the drop-down list of choices again.
* Moving focus out of an empty auto complete field where a value is required should either invoke an error or if a default value was initially assigned, reset the value to the default value.
* Moving focus out of an auto complete field that does not contain a valid entry should either invoke an error or if a default value was initially assigned, reset the value to the default value.

### NOTE
It is good practice to limit the number of matching items in the drop down to a reasonable number. The reasonable number is determined by the task at hand. A list of the 50 US States is probably reasonable, but a list containing all of the office numbers in a building is probably not appropriate.

## WAI-ARIA Roles, States, And Properties
The widget has a role of combobox.
The combobox has an aria-autocomplete property set to one of 'inline', 'list', or 'both'.
For more information, see the combobox design pattern.

# Modal Dialog
A dialog is a window overlayed on either the primary window or another dialog window. The window under a modal dialog is typically inert; users cannot interact with content outside the dialog window. If the background window is not inert, then interaction with elements in the background window cause the modal window to close.

Like non-modal dialogs, modal dialogs contain their tab sequence. That is, Tab and Shift + Tab do not move focus outside the dialog. However, unlike most non-modal dialogs, modal dialogs do not provide means for moving keyboard focus outside the dialog window without closing the dialog.

The alertdialog role is a special-case dialog role designed specifically for dialogs that divert users' attention to a brief, important message. Its usage is described in the alert dialog design pattern.

## Keyboard Interaction
* Tab:
  * Moves focus to the next focusable element inside the dialog.
  * If focus is on the last element, moves focus to the first focusable element inside the dialog.
* Shift + Tab:
  * Moves focus to the previous focusable element inside the dialog.
  * If focus is on the first element, moves focus to the last focusable element inside the dialog.
* Escape: Closes the dialog.

### NOTE
* When a dialog opens, focus placement depends on the nature and size of the content.
  * In all circumstances, focus moves to an element contained in the dialog.
  * Unless a condition where doing otherwise is advisable, focus is initially set on the first focusable element.
  * If content is large enough that focusing the first interactive element could cause the beginning of content to scroll out of view, it is advisable to add tabindex=-1 to a static element at the top of the dialog, such as the dialog title or first paragraph, and initially focus that element.
  * If a dialog contains the final step in a process that is not easily reversible, such as deleting data or completing a financial transaction, it may be advisable to set focus on the least destructive action, especially if undoing the action is difficult or impossible. The Alert Dialog Pattern is often employed in such circumstances.
  * If a dialog is limited to interactions that either provide additional information or continue processing, it might set focus to the element deemed to be most frequently desired, such as a OK or Continue button.
* When a dialog closes, focus typically returns to the element that had focus before the dialog was invoked. This is often the control that opened the dialog. In circumstances where that element no longer exists, focus is set on an element that supports a logical work flow.

## WAI-ARIA Roles, States, And Properties
* The element that serves as the dialog container has a role of dialog.
* The dialog container element has aria-modal set to true.
* The dialog has either:
  * The aria-labelledby property set to refer to the visible dialog title.
  * A label specified with aria-label.
* The aria-describedby property can be set on the element with the dialog role to indicate which element or elements in the dialog contain content that describes the primary purpose or message of the dialog. Specifying descriptive elements enables screen readers to announce the description along with the dialog title and initially focused element when the dialog opens.
* Optionally, if content outside a dialog is completely inert and visually obscured to an extent that is intentionally unreadable, each element containing a portion of the inert layer has aria-hidden set to true. In this circumstance, the dialog container element cannot be a descendant of an element that has aria-hidden set to true. However, if content outside a modal dialog is visually discernable, aria-hidden is not present.

# Accordion
An accordion is a vertically stacked set of elements, such as labels or thumbnails, that allow the user to toggle the display of sections of content. Each labeling element can be expanded or collapsed to reveal or hide its associated content. Accordions are commonly used to reduce the need to scroll when presenting multiple sections of content on a single page.

Terms for understanding accordions include:

### Accordion Header
Label for or thumbnail representing a section of content that also serves as a control for showing, and in some implementations, hiding the section of content.
### Accordion Panel
Section of content associated with an accordion header.

In some accordions, there are additional elements that are always visible adjacent to the accordion header. For instance, a menubutton may accompany each accordion header to provide access to actions that apply to that section. And, in some cases, a snippet of the hidden content may also be visually persistent.

## Keyboard Interaction
* Enter or Space:
  * When focus is on the accordion header for a collapsed panel, expands the associated panel. If the implementation allows only one panel to be expanded, and if another panel is expanded, collapses that panel.
  * When focus is on the accordion header for an expanded panel, collapses the panel if the implementation supports collapsing. Some implementations require one panel to be expanded at all times and allow only one panel to be expanded; so, they do not support a collapse function.
* Down Arrow (Optional): If focus is on an accordion header, moves focus to the next accordion header. If focus is on the last accordion header, either does nothing or moves focus to the first accordion header.
* Up Arrow (Optional): If focus is on an accordion header, moves focus to the previous accordion header. If focus is on the first accordion header, either does nothing or moves focus to the last accordion header.
* Home (Optional): When focus is on an accordion header, moves focus to the first accordion header.
* End (Optional): When focus is on an accordion header, moves focus to the last accordion header.
* Control + Page Down (Optional): If focus is inside an accordion panel or on an accordion header, moves focus to the next accordion header. If focus is in the last accordion header or panel, either does nothing or moves focus to the first accordion header.
* Control + Page Up (Optional): If focus is inside an accordion panel, moves focus to the header for that panel. If focus is on an accordion header, moves focus to the previous accordion header. If focus is on the first accordion header, either does nothing or moves focus to the last accordion header.

## WAI-ARIA Roles, States, And Properties
* The title of each accordion header is contained in an element with role button.
* Each accordion header button is wrapped in an element with role heading that has a value set for aria-level that is appropriate for the information architecture of the page.
  * If the native host language has an element with an implicit heading and aria-level, such as an HTML heading tag, a native host language element may be used.
  * The button element is the only element inside the heading element. That is, if there are other visually persistent elements, they are not included inside the heading element.
* If the accordion panel associated with an accordion header is visible, the header button element has aria-expanded set to true. If the panel is not visible, aria-expanded is set to false.
* The accordion header button element has aria-controls set to the ID of the element containing the accordion panel content.
* If the accordion panel associated with an accordion header is visible, and if the accordion does not permit the panel to be collapsed, the header button element has aria-disabled set to true.
* Optionally, each element that serves as a container for panel content has role region and aria-labelledby with a value that refers to the button that controls display of the panel.
  * Avoid using the region role in circumstances that create landmark region proliferation, e.g., in an accordion that contains more than approximately 6 panels that can be expanded at the same time.
  * Role region is especially helpful to the perception of structure by screen reader users when panels contain heading elements or a nested accordion.

# Dialog
A dialog is a small application window that sits above the application and is designed to interrupt the current processing of an application in order to prompt the user to enter information or require a response (dialog).

A non-modal dialog is one which is displayed and focusable at the same time as the application which invoked it. Also like the modal dialog, focus via the tab and shift-tab key must be maintained within the dialog. However, a non-modal dialog should have a keyboard mechanism to return focus to the application while leaving the dialog open.

## Keyboard Interaction
* Escape cancels the dialog without taking any action.
* Enter submits any data gathered in the dialog.
* F6 is the recommended key to move focus between the application and an open non-model dialog.

### Notes
* The mouse user may click on either the application or the dialog to change focus between the two.
* In a Web application the non-modal dialog is usually always displayed above the application page, rather than in a separate browser window but that is not a requirement.
* Authors should take care when using Enter to trigger default actions since Enter might be connected to and trigger some other user interface element, or it might trigger the focused element. Authors should ensure that Enter activates only the widget they intend.

# Feed
A feed is a section of a page that automatically loads new content as the user reads. Content in a feed is segmented into article elements. Thus, it can be thought of as a dynamic list of articles that often appears to scroll infinitely.

The primary difference between a feed and other ARIA patterns that support loading data as users scroll, e.g., a grid, is that a feed is a structure, not a widget. This means assistive technologies with a reading mode, such as screen readers, will default to reading mode when interacting with feed content, making the feed pattern most useful for blocks of unstructured information that may contain links or other interactive elements.

For example, a product page on a shopping site may have a related products section that displays five products at a time. As the user scrolls, more products are requested and loaded into the DOM. While a static design might include a next button for loading five more products, a dynamic implementation that automatically loads data as needed simplifies the user experience and reduces the inertia associated with viewing more than the first five product suggestions.

Unfortunately, when web pages load content dynamically based on scroll events, it creates interoperability difficulties for users of assistive technologies that cannot sufficiently mimic visual scrolling. Even if the page also observes focus movements in order to identify when more content is needed, there can still be problems because requiring assistive technologies to move DOM focus in response to every reading cursor movement, regardless of context, can also negatively impact a screen reading experience.

The feed pattern enables reliable assistive technology reading mode interaction by establishing the following interoperability agreement between the web page and assistive technologies:

* In the context of a feed, the web page code is responsible for:
  * Appropriate visual scrolling of the content based on which article contains DOM focus.
  * Loading or removing feed articles based on which article contains DOM focus.
* In the context of a feed, assistive technologies with a reading mode are responsible for:
  * Indicating which article contains the reading cursor by ensuring the article element or one of its descendants has DOM focus.
  * providing reading mode keys that move DOM focus to the next and previous articles.
  * Providing reading mode keys for moving the reading cursor and DOM focus past the end and before the start of the feed.

Thus, implementing the feed pattern allows a screen reader to reliably read and trigger the loading of feed content while staying in its reading mode.

Another feature of the feed pattern is its ability to facilitate skim reading for assistive technology users. Web page authors may provide both an accessible name and description for each article. By identifying the elements inside of an article that provide the title and the primary content, assistive technologies can provide functions that enable users to jump from article to article and efficiently discern which articles may be worthy of more attention.

## Keyboard Interaction
The feed pattern is not based on a desktop GUI widget so the feed role is not associated with any well-established keyboard conventions. Supporting the following, or a similar, interface is recommended.

When focus is inside the feed:
* Page Down: Move focus to next article.
* Page Up: Move focus to previous article.
* Control + End: Move focus to the first focusable element after the feed.
* Control + Home: Move focus to the first focusable element before the feed.

### NOTE
* Due to the lack of convention, providing easily discoverable keyboard interface documentation is especially important.
* In some cases, a feed may contain a nested feed. For example, an article in a social media feed may contain a feed of comments on that article. To navigate the nested feed, users first move focus inside the nested feed. Options for supporting nested feed navigation include:
  * Users move focus into the nested feed from the content of the containing article with Tab. This may be slow if the article contains a significant number of links, buttons, or other widgets.
  * Provide a key for moving focus from the elements in the containing article to the first item in the nested feed, e.g., Alt + Page Down.
  * To continue reading the outer feed, Control + End moves focus to the next article in the outer feed.
* In the rare circumstance that a feed article contains a widget that uses the above suggested keys, the feed navigation key will operate the contained widget, and the user needs to move focus to an element that does not utilize the feed navigation keys in order to navigate the feed.

## WAI-ARIA Roles, States, And Properties
* The element that contains the set of feed articles has role feed.
* If the feed has a visible title, the feed element has aria-labelledby referring to the element containing the title. Otherwise, the feed element has a label specified with aria-label.
* Each unit of content in a feed is contained in an element with role article. All content inside the feed is contained in an article element.
* Each article element has aria-labelledby referring to elements inside the article that can serve as a distinguishing label.
* It is optional but strongly recommended for Each article element to have aria-describedby referring to one or more elements inside the article that serve as the primary content of the article.
* Each article element has aria-posinset set to a value that represents its position in the feed.
* Each article element has aria-setsize set to a value that represents either the total number of articles that have been loaded or the total number in the feed, depending on which value is deemed more helpful to users. If the total number in the feed is undetermined, it can be represented by a aria-setsize value of -1.
* When article elements are being added to or removed from the feed container, and if the operation requires multiple DOM operations, the feed element has aria-busy set to true during the update operation. Note that it is extremely important that aria-busy is set to false when the operation is complete or the changes may not become visible to some assistive technology users.

# Grids: Interactive Tabular Data and Layout Containers
A grid widget is a container that enables users to navigate the information or interactive elements it contains using directional navigation keys, such as arrow keys, Home , and End. As a generic container widget that offers flexible keyboard navigation, it can serve a wide variety of needs. It can be used for purposes as simple as grouping a collection of checkboxes or navigation links or as complex as creating a full-featured spreadsheet application. While ARIA properties and assistive technologies use row and column nomenclature when describing and presenting the logical structure of elements with the grid role, using the grid role on an element does not necessarily imply that its visual presentation is tabular.

When presenting content that is tabular, consider the following factors when choosing between implementing this grid patern or the table pattern.

* A grid is a composite widget so it:
  * Always contains multiple focusable elements.
  * Has only one focusable element in the page tab sequence.
  * Requires the author to provide code that manages focus movement inside it.
* All focusable elements contained in a table are included in the page tab sequence.

Uses of the grid pattern broadly fall into two categories: presenting tabular information (data grids) and grouping other widgets (layout grids). Even though both data grids and layout grids employ the same ARIA roles, states, and properties, differences in their content and purpose surface factors that are important to consider in keyboard interaction design. To address these factors, the following two sections describe separate keyboard interaction patterns for data and layout grids.

## Data Grids For Presenting Tabular Information
A grid can be used to present tabular information that has column titles, row titles, or both. The grid pattern is particularly useful if the tabular information is editable or interactive. For example, when data elements are links to more information, rather than presenting them in a static table and including the links in the tab sequence, implementing the grid pattern provides users with intuitive and efficient keyboard navigation of the grid contents as well as a shorter tab sequence for the page. A grid may also offer functions, such as cell content editing, selection, cut, copy, and paste.

In a grid that presents tabular data, every cell contains a focusable element or is itself focusable, regardless of whether the cell content is editable or interactive. There is one exception: if column or row header cells do not provide functions, such as sort or filter, they do not need to be focusable. One reason this is important is that screen readers need to be in their application reading mode, rather than their document reading mode, while the user is interacting with the grid. While in application reading mode, a screen reader user can only discover focusable elements and content that labels focusable elements. So, a screen reader user may unknowningly overlook elements contained in a grid that are either not focusable or not used to label a column or row. A more detailed description of this topic with examples is available in the section describing screen reader document and application reading modes.

## Keyboard Interaction For Data Grids
The following keys provide grid navigation by moving focus among cells of the grid. These key commands are available by default after an element in the grid receives focus.

* Right Arrow: Moves focus one cell to the right. If focus is on the right-most cell in the row, focus does not move.
* Left Arrow: Moves focus one cell to the left. If focus is on the left-most cell in the row, focus does not move.
* Down Arrow: Moves focus one cell down. If focus is on the bottom cell in the column, focus does not move.
* Up Arrow: Moves focus one cell Up. If focus is on the top cell in the column, focus does not move.
* Page Down: Moves focus down an author-determined number of rows, typically scrolling so the bottom row in the currently visible set of rows becomes one of the first visible rows. If focus is in the last row of the grid, focus does not move.
* Page Up: Moves focus up an author-determined number of rows, typically scrolling so the top row in the currently visible set of rows becomes one of the last visible rows. If focus is in the first row of the grid, focus does not move.
* Home: moves focus to the first cell in the row that contains focus.
* End: moves focus to the last cell in the row that contains focus.
* Control + Home: moves focus to the first cell in the first row.
* Control + End: moves focus to the last cell in the last row.

### NOTE
* When the above grid navigation keys move focus, whether the focus is set on an element inside the cell or the grid cell depends on cell content. See Whether to Focus on a Cell or an Element Inside It.
* While navigation keys, such as arrow keys, are moving focus from cell to cell, they are not available to do something like operate a combobox or move an editing caret inside of a cell. If this functionality is needed, see Editing and Navigating Inside a Cell.
* If navigation functions can dynamically add more rows or columns to the DOM, key events that move focus to the beginning or end of the grid, such as control + End, may move focus to the last row in the DOM rather than the last available row in the back-end data.

If a grid supports selection of cells, rows, or columns, the following keys are commonly used for these functions.
* Control + Space: selects the column that contains the focus.
* Shift + Space: Selects the row that contains the focus. If the grid includes a column with checkboxes for selecting rows, this key can serve as a shortcut for checking the box when focus is not on the checkbox.
* Control + A: Selects all cells.
* Shift + Right Arrow: Extends selection one cell to the right.
* Shift + Left Arrow: Extends selection one cell to the left.
* Shift + Down Arrow: Extends selection one cell down.
* Shift + Up Arrow: Extends selection one cell Up.

### NOTE
See Global Recommendations for cut, copy and paste key assignments.

## Layout Grids for Grouping Widgets
The grid pattern can be used to group a set of interactive elements, such as links, buttons, or checkboxes. Since only one element in the entire grid is included in the tab sequence, grouping with a grid can dramatically reduce the number of tab stops on a page. This is especially valuable if scrolling through a list of elements dynamically loads more of those elements from a large data set, such as in a continuous list of suggested products on a shopping site. If elements in a list like this were in the tab sequence, keyboard users are effectively trapped in the list. If any elements in the group also have associated elements that appear on hover, the grid pattern is also useful for providing keyboard access to those contextual elements of the user interface.

Unlike grids used to present data, A grid used for layout does not necessarily have header cells for labeling rows or columns and might contain only a single row or a single column. Even if it has multiple rows and columns, it may present a single, logically homogenous set of elements. For example, a list of recipients for a message may be a grid where each cell contains a link that represents a recipient. The grid may initially have a single row but then wrap into multiple rows as recipients are added. In such circumstances, grid navigation keys may also wrap so the user can read the list from beginning to end by pressing either Right Arrow or Down Arrow. While This type of focus movement wrapping can be very helpful in a layout grid, it would be disorienting if used in a data grid, especially for users of assistive technologies.

Because arrow keys are used to move focus inside of a grid, a grid is both easier to build and use if the components it contains do not require the arrow keys to operate. If a cell contains an element like a listbox, then an extra key command to focus and activate the listbox is needed as well as a command for restoring the grid navigation functionality. Aproaches to supporting this need are described in the section on Editing and Navigating Inside a Cell.

## Keyboard Interaction For Layout Grids
The following keys provide grid navigation by moving focus among cells of the grid. These key commands are available by default after an element in the grid receives focus.

* Right Arrow: Moves focus one cell to the right. Optionally, if focus is on the right-most cell in the row, focus may move to the first cell in the following row. If focus is on the last cell in the grid, focus does not move.
* Left Arrow: Moves focus one cell to the left. Optionally, if focus is on the left-most cell in the row, focus may move to the last cell in the previous row. If focus is on the first cell in the grid, focus does not move.
* * Down Arrow: Moves focus one cell down. Optionally, if focus is on the bottom cell in the column, focus may move to the top cell in the following column. If focus is on the last cell in the grid, focus does not move.
* Up Arrow: Moves focus one cell up. Optionally, if focus is on the top cell in the column, focus may move to the bottom cell in the previous column. If focus is on the first cell in the grid, focus does not move.
* Page Down (Optional): Moves focus down an author-determined number of rows, typically scrolling so the bottom row in the currently visible set of rows becomes one of the first visible rows. If focus is in the last row of the grid, focus does not move.
* Page Up (Optional): Moves focus up an author-determined number of rows, typically scrolling so the top row in the currently visible set of rows becomes one of the last visible rows. If focus is in the first row of the grid, focus does not move.
* Home: moves focus to the first cell in the row that contains focus. Optionally, if the grid has a single column or fewer than three cells per row, focus may instead move to the first cell in the grid.
* End: moves focus to the last cell in the row that contains focus. Optionally, if the grid has a single column or fewer than three cells per row, focus may instead move to the last cell in the grid.
* Control + Home (optional): moves focus to the first cell in the first row.
* Control + End (Optional): moves focus to the last cell in the last row.

### NOTE
* When the above grid navigation keys move focus, whether the focus is sett on an element inside the cell or the grid cell depends on cell content. See Whether to Focus on a Cell or an Element Inside It.
* While navigation keys, such as arrow keys, are moving focus from cell to cell, they are not available to do something like operate a combobox or move an editing caret inside of a cell. If this functionality is needed, see Editing and Navigating Inside a Cell.
* If navigation functions can dynamically add more rows or columns to the DOM, key events that move focus to the beginning or end of the grid, such as control + End, may move focus to the last row in the DOM rather than the last available row in the back-end data.

It would be unusual for a layout grid to provide functions that require cell selection. If it did, though, the following keys are commonly used for these functions.
* Control + Space: selects the column that contains the focus.
* Shift + Space: Selects the row that contains the focus. If the grid includes a column with checkboxes for selecting rows, this key can serve as a shortcut for checking the box when focus is not on the checkbox.
* Control + A: Selects all cells.
* Shift + Right Arrow: Extends selection one cell to the right.
* Shift + Left Arrow: Extends selection one cell to the left.
* Shift + Down Arrow: Extends selection one cell down.
* Shift + Up Arrow: Extends selection one cell Up.

## Keyboard Interaction - Setting Focus And Navigating Inside Cells
This section describes two important aspects of keyboard interaction design shared by both data and layout grid patterns:

* Choosing whether a cell or an element inside a cell receives focus in response to grid navigation key events.
* Enabling grid navigation keys to be used to interact with elements inside of a cell.

### Whether To Focus On A Cell Or An Element Inside It
For assistive technology users, the quality of experience when navigating a grid heavily depends on both what a cell contains and on where keyboard focus is set. For example, if a cell contains a button and a grid navigation key places focus on the cell instead of the button, screen readers announce the button label but do not tell users a button is present.

There are two optimal cell design and focus behavior combinations:
* A cell contains one widget whose operation does not require arrow keys and grid navigation keys set focus on that widget. Examples of such widgets include link, button, menubutton, toggle button, radio button (not radio group), switch, and checkbox.
* A cell contains text or a single graphic and grid navigation keys set focus on the cell.

While any combination of widgets, text, and graphics may be included in a single cell, grids that do not follow one of these two cell design and focus movement patterns add complexity for authors or users or both. The reference implementations included in the example section below demonstrate some strategies for making other cell designs as accessible as possible, but the most widely accessible experiences are likely to come by applying the above two patterns.

### Editing And Navigating Inside A Cell
While navigation keys, such as arrow keys, are moving focus from cell to cell, they are not available to perform actions like operate a combobox or move an editing caret inside of a cell. The user may need keys that are used for grid navigation to operate elements inside a cell if a cell contains:
* Editable content.
* Multiple widgets.
* A widget that utilizes arrow keys in its interaction model, such as a radio group or slider.

Following are common keyboard conventions for disabling and restoring grid navigation functions.

* Enter: Disables grid navigation and:
  * If the cell contains editable content, places focus in an input field, such as a textbox. If the input is a single-line text field, a subsequent press of Enter may either restore grid navigation functions or move focus to an input field in a neighboring cell.
  * If the cell contains one or more widgets, places focus on the first widget.
* F2:
  * If the cell contains editable content, places focus in an input field, such as a textbox. A subsequent press of F2 restores grid navigation functions.
  * If the cell contains one or more widgets, places focus on the first widget. A subsequent press of F2 restores grid navigation functions.
* Alphanumeric keys: If the cell contains editable content, places focus in an input field, such as a textbox.

When grid navigation is disabled, conventional changes to navigation behaviors include:
* Escape: restores grid navigation. If content was being edited, it may also undo edits.
* Right Arrow or Down Arrow: If the cell contains multiple widgets, moves focus to the next widget inside the cell, optionally wrapping to the first widget if focus is on the last widget. Otherwise, passes the key event to the focused widget.
* Left Arrow or Up Arrow: If the cell contains multiple widgets, moves focus to the previous widget inside the cell, optionally wrapping to the first widget if focus is on the last widget. Otherwise, passes the key event to the focused widget.
* Tab: moves focus to the next widget in the grid. Optionally, the focus movement may wrap inside a single cell or within the grid itself.
* Shift + Tab: moves focus to the previous widget in the grid. Optionally, the focus movement may wrap inside a single cell or within the grid itself.

## WAI-ARIA Roles, States, And Properties
* The grid container has role grid.
* Each row container has role row and is either a DOM descendant of or owned by the grid element or an element with role rowgroup.
* Each cell is either a DOM descendant of or owned by a row element and has one of the following roles:
  * columnheader if the cell contains a title or header information for the column.
  * rowheader if the cell contains title or header information for the row.
  * gridcell if the cell does not contain column or row header information.
* If there is an element in the user interface that serves as a label for the grid, aria-labelledby is set on the grid element with a value that refers to the labeling element. Otherwise, a label is specified for the grid element using aria-label.
* If the grid has a caption or description, aria-describedby is set on the grid element with a value refering to the element containing the description.
* If the grid provides sort functions, aria-sort is set to an appropriate value on the header cell element for the sorted column or row as described in the section on grid and table properties.
* If the grid supports selection, when a cell or row is selected, the selected element has aria-selected set true.
* If the grid provides content editing functionality and contains cells that may have edit capabilities disabled in certain conditions, aria-readonly may be set true on cells where editing is disabled. If edit functions are disabled for all cells, aria-readonly may be set true on the grid element. Grids that do not provide editing functions do not include the aria-readonly attribute on any of their elements.
* If there are conditions where some rows or columns are hidden or not present in the DOM, e.g., data is dynamically loaded when scrolling or the grid provides functions for hiding rows or columns, the following properties are applied as described in the section on grid and table properties.
  * aria-colcount or aria-rowcount is set to the total number of columns or rows, respectively.
  * aria-colindex or aria-rowindex is set to the position of a cell within a row or column, respectively.
* If the grid includes cells that span multiple rows or multiple columns, and if the grid role is NOT applied to an HTML table element, then aria-rowspan or aria-colspan is applied as described in grid and table properties.

### NOTE
* If the element with the grid role is an HTML table element, then it is not necessary to use ARIA roles for rows and cells because the HTML elements have implied ARIA semantics. For example, an HTML <TR> has an implied ARIA role of row. A grid built from an HTML table that includes cells that span multiple rows or columns must use HTML rowspan and colspan and must not use aria-rowspan or aria-colspan.
* If rows or cells are included in a grid via aria-owns, they will be presented to assistive technologies after the DOM descendants of the grid element unless the DOM descendants are also included in the aria-owns attribute. See using aria-owns for a detailed explanation.

# Listbox
A listbox widget presents a list of options and allows a user to select one or more of them. A listbox that allows a single option to be chosen is a single-select listbox; one that allows multiple options to be selected is a multi-select listbox.

When screen readers present a listbox, they may render the name, state, and position of each option in the list. The name of an option is a string calculated by the browser, typically from the content of the option element. As a flat string, the name does not contain any semantic information. Thus, if an option contains a semantic element, such as a heading, screen reader users will not have access to the semantics. In addition, the interaction model conveyed by the listbox role to assistive technologies does not support interacting with elements inside of an option. Because of these traits of the listbox widget, it does not provide an accessible way to present a list of interactive elements, such as links, buttons, or checkboxes. To present a list of interactive elements, see the grid pattern.

Avoiding very long option names facilitates understandability and perceivability for screen reader users. The entire name of an option is spoken as a single unit of speech when the option is read. When too much information is spoken as the result of a single key press, it is difficult to understand. Long names inhibit perception by increasing the impact of interrupted speech because users typically have to re-read the entire option. And, if the user does not understand what is spoken, reading the name by character, word, or phrase may be a difficult operation for many screen reader users in the context of a listbox widget.

Sets of options where each option name starts with the same word or phrase can also significantly degrade usability for keyboard and screen reader users. Scrolling through the list to find a specific option becomes inordinately time consuming for a screen reader user who must listen to that word or phrase repeated before hearing what is unique about each option. For example, if a listbox for choosing a city were to contain options where each city name were preceded by a country name, and if many cities were listed for each country, a screen reader user would have to listen to the country name before hearing each city name. In such a scenario, it would be better to have 2 list boxes, one for country and one for city.

## Keyboard Interaction
For a vertically oriented listbox:
* When a single-select listbox receives focus:
  * If none of the options are selected before the listbox receives focus, the first option receives focus. Optionally, the first option may be automatically selected.
  * If an option is selected before the listbox receives focus, focus is set on the selected option.
* When a multi-select listbox receives focus:
  * If none of the options are selected before the listbox receives focus, focus is set on the first option and there is no automatic change in the selection state.
  * If one or more options are selected before the listbox receives focus, focus is set on the first option in the list that is selected.
* Down Arrow: Moves focus to the next option. Optionally, in a single-select listbox, selection may also move with focus.
* Up Arrow: Moves focus to the previous option. Optionally, in a single-select listbox, selection may also move with focus.
* Home (Optional): Moves focus to first option. Optionally, in a single-select listbox, selection may also move with focus. Supporting this key is strongly recommended for lists with more than five options.
* End (Optional): Moves focus to last option. Optionally, in a single-select listbox, selection may also move with focus. Supporting this key is strongly recommended for lists with more than five options.
* Type-ahead is recommended for all listboxes, especially those with more than seven options:
  * Type a character: focus moves to the next item with a name that starts with the typed character.
  * Type multiple characters in rapid succession: focus moves to the next item with a name that starts with the string of characters typed.
* Multiple Selection: Authors may implement either of two interaction models to support multiple selection: a recommended model that does not require the user to hold a modifier key, such as Shift or Control, while navigating the list or an alternative model that does require modifier keys to be held while navigating in order to avoid losing selection states.
  * Recommended selection model -- holding modifier keys is not necessary:
    * Space: changes the selection state of the focused option .
    * Shift + Down Arrow (Optional): Moves focus to and toggles the selected state of the next option.
    * Shift + Up Arrow (Optional): Moves focus to and toggles the selected state of the previous option.
    * Shift + Space (Optional): Selects contiguous items from the most recently selected item to the focused item.
    * Control + Shift + Home (Optional): Selects the focused option and all options up to the first option.
    * Control + Shift + End (Optional): Selects the focused option and all options down to the last option.
    * Control + A (Optional): Selects all options in the list. Optionally, if all options are selected, it may also unselect all options.
  * Alternative selection model -- moving focus without holding a Shift or Control modifier unselects all selected nodes except the focused node:
    * Shift + Down Arrow: Moves focus to and toggles the selection state of the next option.
    * Shift + Up Arrow: Moves focus to and toggles the selection state of the previous option.
    * Control + Down Arrow: Moves focus to the next option without changing its selection state.
    * Control + Up Arrow: Moves focus to the previous option without changing its selection state.
    * Control + Space Changes the selection state of the focused option.
    * Shift + Space (Optional): Selects contiguous items from the most recently selected item to the focused item.
    * Control + Shift + Home (Optional): Selects the focused option and all options up to the first option.
    * Control + Shift + End (Optional): Selects the focused option and all options down to the last option.
    * Control + A (Optional): Selects all options in the list. Optionally, if all options are selected, it may also unselect all options.

### NOTE
* DOM focus (the active element) is functionally distinct from the selected state. For more details, see this description of differences between focus and selection.
* The listbox role supports the aria-activedescendant property, which provides an alternative to moving DOM focus among treeitem elements when implementing keyboard navigation. For details, see Managing Focus in Composites Using aria-activedescendant.
* In a single-select listbox, moving focus may optionally unselect the previously selected option and select the newly focused option. This model of selection is known as "selection follows focus". Having selection follow focus can be very helpful in some circumstances and can severely degrade accessibility in others. For additional guidance, see Deciding When to Make Selection Automatically Follow Focus.
* If selecting or unselecting all options is an important function, implementing separate controls for these actions, such as buttons for "Select All" and "Unselect All", significantly improves accessibility.
* If the options in a listbox are arranged horizontally:
  * Down Arrow performs as Right Arrow is described above, and vice versa.
  * Up Arrow performs as Left Arrow is described above, and vice versa.

## WAI-ARIA Roles, States, And Properties
* An element that contains or owns all the listbox options has role listbox.
* Each option in the listbox has role option and is a DOM descendant of the element with role listbox or is referenced by an aria-owns property on the listbox element.
* If the listbox is not part of another widget, then it has a visible label referenced by aria-labelledby on the element with role listbox.
* In a single-select listbox, the selected option has aria-selected set to true.
* if the listbox supports multiple selection:
  * The element with role listbox has aria-multiselectable set to true.
  * All selected options have aria-selected set to true.
  * All options that are not selected have aria-selected set to false.
* If the complete set of available options is not present in the DOM due to dynamic loading as the user scrolls, their aria-setsize and aria-posinset attributes are set appropriately.
* If options are arranged horizontally, the element with role listbox has aria-orientation set to horizontal. The default value of aria-orientation for listbox is vertical.

# Menu Or Menu Bar
A menu is a widget that offers a list of choices to the user, such as a set of actions or functions. A menu is usually opened, or made visible, by activating a menu button, choosing an item in a menu that opens a sub menu, or by invoking a command, such as Shift + F10 in Windows, that opens a context specific menu. When a user activates a choice in a menu, the menu usually closes unless the choice opened a submenu.

A menu that is visually persistent is a menubar. A menubar is typically horizontal and is often used to create a menu bar similar to those found near the top of the window in many desktop applications, offering the user quick access to a consistent set of commands.

A common convention for indicating that a menu item launches a dialog box is to append "…" (ellipsis) to the menu item label, e.g., "Save as …".

## Keyboard Interaction
The following description of keyboard behaviors assumes:
* A horizontal menubar containing several menuitem elements.
* All items in the menubar have child submenus that contain multiple vertically arranged items.
* Some of the menuitem elements in the submenus have child submenus with items that are also vertically arranged.
When reading the following descriptions, also keep in mind that:
* Focusable elements, which may have role menuitem, menuitemradio, or menuitemcheckbox, are referred to as items.
* If a behavior applies to only certain types of items, e.g., menuitem elements, the specific role name is used.
* Submenus, also known as pop-up menus, are elements with role menu.
* Except where noted, menus opened from a menubutton behave the same as menus opened from a menubar.
* When a menu opens, or when a menubar receives focus, keyboard focus is placed on the first item. All items are focusable as described in 4.6 Keyboard Navigation Inside Components.
* Enter:
  * When focus is on a menuitem that has a submenu, opens the submenu and places focus on its first item.
  * Otherwise, activates the item and closes the menu.
* Space:
  * When focus is on a menuitemcheckbox, changes the state without closing the menu.
  * When focus is on a menuitemradio that is not checked, without closing the menu, checks the focused menuitemradio and unchecks any other checked menuitemradio element in the same group.
  * (Optional): When focus is on a menuitem that has a submenu, opens the submenu and places focus on its first item.
  * (Optional): When focus is on a menuitem that does not have a submenu, activates the menuitem and closes the menu.
* Down Arrow:
  * When focus is on a menuitem in a menubar, opens its submenu and places focus on the first item in the submenu.
  * When focus is in a menu, moves focus to the next item, optionally wrapping from the last to the first.
* Up Arrow:
  * When focus is in a menu, moves focus to the previous item, optionally wrapping from the first to the last.
  * When focus is in a menubar, does nothing.
* Right Arrow:
  * When focus is in a menubar, moves focus to the next item, optionally wrapping from the last to the first.
  * When focus is in a menu and on a menuitem that has a submenu, opens the submenu and places focus on its first item.
  * When focus is in a menu and on an item that does not have a submenu, performs the following 3 actions:
    * Closes the submenu and any parent menus.
    * Moves focus to the next menuitem in the menubar.
    * Either: (Recommended) opens the submenu of that menuitem without moving focus into the submenu, or opens the submenu of that menuitem and places focus on the first item in the submenu.
  * Note that if the menubar were not present, e.g., the menus were opened from a menubutton, Right Arrow would not do anything when focus is on an item that does not have a submenu.
* Left Arrow:
  * When focus is in a menubar, moves focus to the previous item, optionally wrapping from the last to the first.
  * When focus is in a submenu of an item in a menu, closes the submenu and returns focus to the parent menuitem.
  * When focus is in a submenu of an item in a menubar, performs the following 3 actions:
    * Closes the submenu.
    * Moves focus to the previous menuitem in the menubar.
    * Either: (Recommended) opens the submenu of that menuitem without moving focus into the submenu, or opens the submenu of that menuitem and places focus on the first item in the submenu.
* Home: If arrow key wrapping is not supported, moves focus to the first item in the current menu or menubar.
* End: If arrow key wrapping is not supported, moves focus to the last item in the current menu or menubar.
Any key that corresponds to a printable character (Optional): Move focus to the next menu item in the current menu whose label begins with that printable character.
* Escape: Close the menu that contains focus and return focus to the element or context, e.g., menu button or parent menuitem, from which the menu was opened.
* Tab: Moves focus to the next element in the tab sequence, and if the item that had focus is not in a menubar, closes its menu and all open parent menu containers.
* Shift + Tab: Moves focus to the previous element in the tab sequence, and if the item that had focus is not in a menubar, closes its menu and all open parent menu containers.

### NOTE
* Disabled menu items are focusable but cannot be activated.
* A separator in a menu is not focusable or interactive.
* If a menu is opened or a menubar receives focus as a result of a context action, Escape or Enter may return focus to the invoking context. For example, a rich text editor may have a menubar that receives focus when a shortcut key, e.g., alt + F10, is pressed while editing. In this case, pressing Escape or activating a command from the menu may return focus to the editor.
* Although it is recommended that authors avoid doing so, some implementations of navigation menubars may have menuitem elements that both perform a function and open a submenu. In such implementations, enter and Space perform a navigation function, e.g., load new content, while Down Arrow, in a horizontal menubar, opens the submenu associated with that same menuitem.
* When items in a menubar are arranged vertically and items in menu containers are arranged horizontally:
  * Down Arrow performs as Right Arrow is described above, and vice versa.
  * Up Arrow performs as Left Arrow is described above, and vice versa.

## WAI-ARIA Roles, States, And Properties
* A menu is a container of items that represent choices. The element serving as the menu has a role of either menu or menubar.
* The items contained in a menu are child elements of the containing menu or menubar and have any of the following roles:
  * menuitem
  * menuitemcheckbox
  * menuitemradio
* If activating a menuitem opens a submenu, the menuitem is known as a parent menuitem. A submenu's menu element is contained in or owned by it's parent menuitem.
* A parent menuitem has either aria-label or aria-labelledby set to specify a label. Warning: parent menuitems missing a label are labeled by all child elements, causing screen readers to announce every child menuitem and often making a menu so verbose that it is unusable.
* A parent menuitem has aria-haspopup set to true.
* One of the following approaches is used to enable scripts to move focus among items in a menu as described in 4.6 Keyboard Navigation Inside Components:
  * The menu container has tabindex set to -1 or 0 and aria-activedescendant set to the ID of the focused item.
  * Each item in the menu has tabindex set to -1, except in a menubar, where the first item has tabindex set to 0.
* When a menuitemcheckbox or menuitemradio is checked, aria-checked is set to true.
* When a menu item is disabled, aria-disabled is set to true.
* Items in a menu may be divided into groups by placing an element with a role of separator between groups. For example, this technique should be used when a menu contains a set of menuitemradio items.
* All separators should have aria-orientation consistent with the separator's orientation.
* If a menubar is vertically oriented, it has aria-orientation set to vertical. The default value of aria-orientation for a menubar is horizontal.
* If a menu is horizontally oriented, it has aria-orientation set to horizontal. The default value of aria-orientation for a menu is vertical.

# Menu Button
A menu button is a button that opens a menu. It is often styled as a typical push button with a downward pointing arrow or triangle to hint that activating the button will display a menu.

## Keyboard Interaction
* With focus on the button:
  * Space and Enter: open the menu and place focus on the first menu item.
  * (Optional) Down Arrow: opens the menu and moves focus to the first menu item.
* The keyboard behaviors needed after the menu is open are described in 2.16 Menu or Menu bar.

## WAI-ARIA Roles, States, And Properties
* The element that opens the menu has role button.
* The element with role button has aria-haspopup set to true.
* The roles, states, and properties needed for the menu opened by the button are described in 2.16 Menu or Menu bar.

# Slider (Multi-Thumb)
Work on this design pattern is in progress and is tracked in issue 221. Please provide any feedback in that issue.

A multi-thumb slider is a slider with two or more thumbs that each set a value in a group of related values. Many two-thumb sliders set a maximum and minimum value for a range, and the thumbs are not allowed to pass one another. That is, the mthumb that sets the upper value of the range can not be set lower than the thumb that controls the lower value of the range. However, in some multi-thumb sliders, each thumb sets a value that does not depend on the other thumb values.

## Keyboard Interaction
* Each thumb is in the page tab sequence and has the same keyboard interaction as a single-thumb slider.
* The tab order remains constant regardless of thumb value and visual position within the slider. For example, if the value of a thumb changes such that it moves past one of the other thumbs, the tab order does not change.

## WAI-ARIA Roles, States, And Properties
* Each element serving as a focusable slider thumb has role slider.
* Each slider element has the aria-valuenow property set to a decimal value representing the current value of the slider.
* Each slider element has the aria-valuemin property set to a decimal value representing the minimum allowed value of the slider.
* Each slider element has the aria-valuemax property set to a decimal value representing the maximum allowed value of the slider.
* If a value of aria-valuenow is not user-friendly, e.g., the day of the week is represented by a number, the aria-valuetext property is set to a string that makes the slider value understandable, e.g., "Monday".
* If a slider has a visible label, it is referenced by aria-labelledby on the slider element. Otherwise, the slider element has a label provided by aria-label.
* If a slider is vertically oriented, it has aria-orientation set to vertical. The default value of aria-orientation for a slider is horizontal.

# Tabs
Tabs are a set of layered sections of content, known as tab panels, that display one panel of content at a time. Each tab panel has an associated tab element, that when activated, displays the panel. The list of tab elements is arranged along one edge of the currently displayed panel, most commonly the top edge.

Terms used to describe this design pattern include:
* Tabs or Tabbed Interface
  * A set of tab elements and their associated tab panels.
* Tab List
  * A set of tab elements contained in a tablist element.
* tab
  * An element in the tab list that serves as a label for one of the tab panels and can be activated to display that panel.
* tabpanel
  * The element that contains the content associated with a tab.

When a tabbed interface is initialized, one tab panel is displayed and its associated tab is styled to indicate that it is active. When the user activates one of the other tab elements, the previously displayed tab panel is hidden, the tab panel associated with the activated tab becomes visible, and the tab is considered "active".

## Keyboard Interaction
For the tab list:

* Tab: When focus moves into the tab list, places focus on the active tab element . When the tab list contains the focus, moves focus to the next element in the page tab sequence outside the tablist, which is typically either the first focusable element inside the tab panel or the tab panel itself.
When focus is on a tab element in a horizontal tab list:
* Left Arrow: moves focus to the previous tab. If focus is on the first tab, moves focus to the last tab. Optionally, activates the newly focused tab (See note below).
* Right Arrow: Moves focus to the next tab. If focus is on the last tab element, moves focus to the first tab. Optionally, activates the newly focused tab (See note below).
When focus is on a tab in a tablist with either horizontal or vertical orientation:
* Space or Enter: Activates the tab if it was not activated automatically on focus.
* Home (Optional): Moves focus to the first tab
* End (Optional): Moves focus to the last tab.
* Shift + F10: If the tab has an associated pop-up menu, opens the menu.
* Delete (Optional): If deletion is allowed, deletes (closes) the current tab element and its associated tab panel. If any tabs remain, sets focus to the tab following the tab that was closed and activates the newly focused tab. Alternatively, or in addition, the delete function is available in a context menu.

### NOTE
It is recommended that tabs activate automatically when they receive focus as long as their associated tab panels are displayed without noticeable latency. This typically requires tab panel content to be preloaded. Otherwise, automatic activation slows focus movement, which significantly hampers users' ability to navigate efficiently across the tab list. For additional guidance, see 4.4 Deciding When to Make Selection Automatically Follow Focus.

If the tabs in a tab list are arranged vertically:
* Down Arrow performs as Right Arrow is described above.
* Up Arrow performs as Left Arrow is described above.
If the tab list is horizontal, it does not listen for Down Arrow or Up Arrow so those keys can provide their normal browser scrolling functions even when focus is inside the tab list.

## WAI-ARIA Roles, States, And Properties
* The element that serves as the container for the set of tabs has role tablist.
* Each element that serves as a tab has role tab and is contained within the element with role tablist.
* Each element that contains the content panel for a tab has role tabpanel.
* Each element with role tab has the property aria-controls referring to its associated tabpanel element.
* The active tab element has the state aria-selected set to true and all other tab elements have it set to false.
* Each element with role tabpanel has the property aria-labelledby referring to its associated tab element.
* If a tab element has a pop-up menu, it has the property aria-haspopup set to true.
* If the tablist element is vertically oriented, it has the property aria-orientation set to vertical. The default value of aria-orientation for a tablist element is horizontal.

# Toolbar
A toolbar is a container for grouping a set of controls, such as buttons, menubuttons, or checkboxes.

When a set of controls is visually presented as a group, the toolbar role can be used to communicate the presence and purpose of the grouping to screen reader users. Grouping controls into toolbars can also be an effective way of reducing the number of tab stops in the keyboard interface.

To optimize the benefit of toolbar widgets:
* Implement focus management so the keyboard tab sequence includes one stop for the toolbar and arrow keys move focus among the controls in the toolbar.
* Avoid including controls that require arrow keys to operate, such as textbox or radio group. If unavoidable, include only one such control and make it the last element .
* Use toolbar as a grouping element only if the group contains 3 or more controls.

## Keyboard Interaction
When the toolbar receives focus, focus is set on the first control that is not disabled. Optionally, if the toolbar has previously contained focus, focus is set on the control that last had focus.

For a horizontal toolbar (the default):
* Left Arrow: Moves focus to the previous control. Optionally, focus movement may wrap from the first element to the last element.
* Right Arrow: Moves focus to the next control. Optionally, focus movement may wrap from the last element to the first element.
* Home (Optional): Moves focus to first element.
* End (Optional): Moves focus to last element.

### NOTE
* If the items in a toolbar are arranged vertically:
  * Down Arrow performs as Right Arrow is described above.
  * Up Arrow performs as Left Arrow is described above.
* Typically, disabled elements are not focusable when navigating with a keyboard. However, in circumstances where discoverability of a function is crucial, it may be helpful if disabled controls are focusable so screen reader users are more likely to be aware of their presence. For additional guidance, see 4.7 Focusability of disabled controls.
* In applications where quick access to a toolbar is important, such as accessing an editor's toolbar from its text area, a documented shortcut key for moving focus from the relevant context to its corresponding toolbar is recommended.

## WAI-ARIA Roles, States, And Properties
* The element that serves as the toolbar container has role toolbar.
* If the toolbar has a visible label, it is referenced by aria-labelledby on the toolbar element. Otherwise, the toolbar element has a label provided by aria-label.
* If the controls are arranged vertically, the toolbar element has aria-orientation set to vertical. The default orientation is horizontal.

# Tooltip Widget
Work on this design pattern is in progress and tracked by issue 128. Please provide feedback in that issue.

A tooltip is a popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it. It typically appears after a small delay and disappears when Escape is pressed or on mouse out.

Tooltip widgets do not receive focus. A hover that contains focusable elements can be made using the a non-modal dialog pattern.

## Keyboard Interaction
Escape: Dismisses the Tooltip.

### NOTE
* Focus stays on the triggering element while the tooltip is displayed.
* If the tooltip is invoked when the trigger element receives focus, then it is dismissed when it no longer has focus (onBlur). If the tooltip is invoked with mouseIn, then it is dismissed with on mouseOut.

## WAI-ARIA Roles, States, And Properties
* The element that serves as the tooltip container has role tooltip.
* The element that triggers the tooltip references the tooltip element with aria-describedby.

# Aria Roles And Properties Not Available In HTML5
Below are listed the ARIA roles and properties. not considered to be available natively in HTML5. It is clear that many roles and properties provided by ARIA which can be used to convey information to users are not available in HTML5.

## ARIA Roles

### Covered Above
* alert
* alertdialog
* application
* document
* grid
* gridcell
* menu
* menubar
* menuitemcheckbox
* menuitemradio
* presentation
* region
* tab
* tablist
* tabpanel
* toolbar
* tooltip

### Not Covered Above
* directory
* group
* log
* marquee
* note
* scrollbar
* search
* status
* switch
* timer
* tree
* treegrid
* treeitem

## ARIA States and Properties (aria-* attributes)
* aria-activedescendant
* aria-atomic
* aria-busy (state)
* aria-controls
* aria-describedby
* aria-dropeffect
* aria-expanded (state)
* aria-flowto
* aria-grabbed (state)
* aria-haspopup
* aria-hidden (state)
* aria-label
* aria-labelledby
* aria-level
* aria-live
* aria-orientation
* aria-owns
* aria-posinset
* aria-pressed (state)
* aria-relevant
* aria-setsize
* aria-sort

# Custom Control Design Considerations
* Can you get to the control via the keyboard? Refer to Providing Keyboard Focus
* Can you use the control with the keyboard? Refer to Keyboard Navigation
* Can you use the control with touch gestures? With assistive technology enabled?
* Can you operate the control using the standard keys (Refer to ARIA Widget Design Patterns) and/or touch gestures for the control type?
* Can you easily see it when the control has focus? Refer to Visible Focus (WCAG2)
* The control has a text label that is exposed as an accessible name in accessibility APIs
* The control has an appropriate role exposed in accessibility APIs
* The control has any UI states and properties that it has exposed in accessibility APIs
* The control label/description/icon is perceivable/usable for low vision users (Use a color contrast checker.)
* The control is perceivable/usable when High Contrast Mode is enabled (e.g. Windows HC mode)
