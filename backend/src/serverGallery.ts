import { IncomingMessage } from "http"
import { basename, dirname } from "path/posix"

const fs = require('fs')
const path = require('path')
const querystring = require('querystring')
import * as util from 'util';

const readdir = util.promisify(fs.readdir);

enum folders {
    first_page = 1,
    second_page,
    third_page,
    fourth_page,
    fifth_page,
}

interface GalleryResponse {
    objects: Array<string>,
    page: string,
    total: number
}

let photos: Array<string> = [];

export function sendGalleryObject(url: any){
    photos = [];
    let str = querystring.parse(url, "?")
    console.log(str['page'])
    let pageNumber: number = Number(`${str['page']}`);
    console.log(pageNumber)
    let dir = '../backend/photos/' + folders[pageNumber];
    //let folderPath = dirname(`../backend/photos/${folders[pageNumber]}`)
    console.log(dir)

    dir = path.resolve(dir);
    console.log(dir)

    let files = fs.readdirSync(dir)

    files.forEach((file: any) => {
        photos.push(file)
    });



    console.log(photos)


   


    // return galleryResponse;

    

    

    function mappedArray(arr: Array<string>): Array<string>{
        let newArr: Array<string> = []
        
        newArr = arr.map((img) => {
            return `http://localhost:8080/photos/${folders[pageNumber]}/` + img;
        })
            console.log(newArr)
            return newArr;
    }

    let galleryResponse: GalleryResponse = {
        objects: mappedArray(photos),
        page: pageNumber.toString(),
        total: 5
    }

    console.log(galleryResponse)

    return galleryResponse;
    

}    






