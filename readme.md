# Changed That I Made

Here is a list of the changed made and the reasons for them.

## CSS File

- Removed `padding` and `marign` from `*` style
- Changed `html` font size to `1rem` to use relative units
- Changed `body` color to the light variable instead of `#ffff` so all colours update if you change the variable. If you want to keep the body color white all the time, then ignore this change
- Removed the `color` declaration from the `h1, h2, h3, p, a` selector, since the `body` colour has that covered
- Removed `font-weight` from the `h1, h2, h3` selector, since it's been taken care of by the `body` selector
- Removed `letter-spacing` from the `p, a` selector because it made paragraph text too tight
- Removed `text-decoration: none` from the `a` selector because people associate underlines with links
- Added an `a, a:visited` selector so all links (even visited links) inherit their colour from their parent element
- Changed the `h1` font size to a variable size based on viewport, this keeps it as big as needed to take up most of the viewport width
- Reduced the width on the navigation div to allow for it to be seen on mobile devices.
- Added a `.navigation a` selector to remove the link underline from the nav
- Changed the hero image background properties to one `backgorund` property to show you how you can do it in one line
- Added the light colour variable to the `.heading-wrapper` to make sure it can be seen on the dark image
- Replaced the `.hero-heading-underline` with a `boarder-top` on the second `.hero__heading`. Empty elements should be avoided (unless being populated by JS later)
- Added `align-items` to the `.wrapper-flex` so the logo wrapper and nav elements are aligned along the middle
- Modified the nav list to have less space between each element

## HTML File

- Removed the `span` used to make the underline
- Changed the `.heading-wrapper` to a `h1` and each line is a `div`

## Other Thoughts

You should only have one `h1` per page, so I replaced the two `h1`s inside a `div` to two `div`s inside an `h1`.

The hero image section can use some work. On bigger devices the text is really far down because of the `100vh` and center alignment you went with. I would either change the height to be `66vw` (to keep the correct aspect ratio of the image) or remove the`align-items: center` and just do a `margin-top` to make sure it's far enough down that it's not over the top of the navigation.

Speaking of navigation, there needs to be a lot of work done on it for smaller screen sizes, since it's being pushed off the right edge and the overflow is hidden.
