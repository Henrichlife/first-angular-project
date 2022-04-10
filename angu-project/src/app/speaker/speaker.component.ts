import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from  '@angular/common/http';

@Component({
  selector: 'app-speaker',
  templateUrl: './speaker.component.html',
  styleUrls: ['./speaker.component.css']
})
export class SpeakerComponent implements OnInit {

  myData = [
    'hellowe', 'world', 'we are here again', 'tank u'
  ]

  jsonData: any;

  constructor(private http: HttpClient) { 
    this.getPosts()
  }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/1/comments').subscribe(res => {
      console.log(res);
      this.jsonData = res;
    })
  }

  ngOnInit(): void {
  }

}
