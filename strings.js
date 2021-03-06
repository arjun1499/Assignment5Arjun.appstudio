let quoteString = "Failure is simply the opportunity to begin again this time more intelligently."

upperCaseString = quoteString.toUpperCase()

console.log(`Upper case string is: ${upperCaseString}.`)

let authorString = "- Henry Ford"

let completeString= (quoteString + authorString)

let found = ""

value = completeString.includes("Henry")

if (value == true) {
  found = "Henry was in the quote string"
  console.log(found)
} else {
   found = " Henry was NOT in the quote string"
  console.log(found)
}

