// Sorting function
function doSort(){
    // Get the list element
    var list = document.getElementById("OList");

    // Get all list items
    var items = list.getElementsByTagName("li");

    // Convert the HTMLCollection to an array
    var itemsArray = Array.from(items);

    // Sort the array alphabetically
    itemsArray.sort(function(a, b){
        return a.textContent.localeCompare(b.textContent);
    });

    // Append the sorted list items back to the list
    itemsArray.forEach(function(item){
        list.appendChild(item);
    });

    // Revert the changes after 3 seconds (3000 milliseconds)
    setTimeout(function(){
        // Get the list element again
        var newList = document.getElementById("OList");

        // Get all list items in the sorted order
        var newItems = newList.getElementsByTagName("li");

        // Convert the HTMLCollection to an array
        var newItemsArray = Array.from(newItems);

        // Reverse the array to restore the original order
        newItemsArray.reverse();

        // Append the list items back to the list in the original order
        newItemsArray.forEach(function(item){
            newList.appendChild(item);
        });
    },3000); // Change the duration as needed
}

// Function to change the message of button
function doSomething(){
    // Change the message
    document.getElementById("Wish").innerHTML = "Have a good day";
    
    // Revert the changes after 3 seconds (3000 milliseconds)
    setTimeout(function(){
        document.getElementById("Wish").innerHTML = "Hello there";
    },3000); // Change the duration as needed
}