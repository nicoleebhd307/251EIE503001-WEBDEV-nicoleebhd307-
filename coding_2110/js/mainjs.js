function load_dataset(dataset, type)
{
    var xhr =new XMLHttpRequest();
    xhr.open("GET","datasets/books.xml",true);
    xhr.send();
    xhr.onreadystatechange=function()
    {
        if (xhr.readyState==4 && xhr.status==200)
        {

        }
        else
        {
            if (type=="json")
                data_from_server=xhr.responseText
            else if (type=="xml")
                data_from_server=xhr.responseXML
        }
    }
}

//Xóa bớt tab: bôi đen -> Shift + Tab