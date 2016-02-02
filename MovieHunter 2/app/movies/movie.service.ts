import {Injectable}     from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';
import {IMovie}         from './movie'

@Injectable()
export class MovieService {
  constructor (private http: Http) {}

  private _moviesUrl = 'app/movies/movies.json';

  getMovies () {
    return this.http.get(this._moviesUrl)
                    .map(res => <IMovie[]> res.json())
                    .catch(this.handleError);
  }
  
  private handleError (error: Response) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
  
// For debugging
// Replace .map with .map(this.handleMap)
//   private handleMap (res)
//     {
//         let data = <IMovie[]> res.json();
//         console.log(data);
//         return <IMovie[]> data;
//     }
}