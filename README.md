To Start `npm run storybook`

Note, around halfway through my assignment, my storybook had issues. Should have them resolved, but let me kno if not.

- Assume the width of the component is forced, height it auto
- Assume that the title can only be 2 lines long
- Assume repo name and Issue Number can only own half a side
- Isn't any sort of anchor points between repo name and issue number. Just a 9px gap. It seems to float and move over the place. Grid might not be possible. 
- What is the case when there's a single line? With nothing underneath. There was no example. Trying to determine max height from that
- Had to hardcode the css grid to some pixel heights, which is fine.
- Issue actions 32 + 12 + 12
- I just placed a hard 8px padding around. Can be tweaked later
- Unsure which pieces are the hover state for the top right button. Going to assume it should be there avatar hover
- Using grid for whole layout became tricky because of permutations. Moved main body into grid

---
This was about the halfway mark for my two hour limit, and I realized I didn't have enought time to keep taking notes. Stopped notes to try and touch as much of the assignment as possible. 


- Pieces still need to be moved out of px, make relative.
- Added `Polish` library to handle darken cases, never used 
- Didn't get to tests
- Didn't get to split into smaller components
- No clean up to my file. Just gigantic structure file
- Didn't get to "use" Component
- Didn't add props
- Didn't get to add States (hover, closed)
- Didn't finish adding button/menu hover
- Labels weren't configured to handle overflow correct
- Didn't Look at Avatar Hover

As a whole I took a little over two hours. My storybook ended up having issues halfway through so I tried not to count that to the time. Apparently using Storybooks automated builder can have some issues. I spent about 15 min at the start planning, then began coding. I used Create-React-App.

My feeling is we can probably shave off some of the requirements. If I was actually doing this for a job, I would easily place between 10 - 20 hours to get this working right. Pieces off the top of my head to shave off

- Avatar hover and selected state
- Issue Priority
- Either the action button or the menu button

With those removed, I still believe it would take longer than 2 hours, especially if someone does it well, but I don't feel with those lost, I have any less ability to judge the developers skills.
