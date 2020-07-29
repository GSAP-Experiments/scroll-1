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
- Added a `.navigation a` selector to remove the link underline from the nav
- Changed the hero image background properties to one `backgorund` property to show you how you can do it in one line
- Added the light colour variable to the `.heading-wrapper` to make sure it can be seen on the dark image
- Replaced the `.hero-heading-underline` with a `boarder-top` on the second `.heading-wrapper`. Empty elements should be avoided (unless being populated by JS later)

## HTML File

- Removed the `span` used to make the underline

## Other Thoughts

You should only have one `h1` per page, so I would suggest replacing the `hero__content` with one `h1` and two inner `div`s. I didn't make the change here because I didn't know what it would do to your JS.
