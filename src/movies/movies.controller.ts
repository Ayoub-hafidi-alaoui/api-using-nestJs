import { Controller, Get, Param, Query } from '@nestjs/common';
import { get } from 'https';

@Controller('movies')
export class MoviesController {
    @Get()
    gettAll():string {
        return "this action return all movies"
    }
    @Get('/search/')
    searchMovie(@Query("movie")movie:string):string {
        return `this function returns ${movie} which is amazing `
    }
    @Get('/:id')
    getOne(@Param("id") moviesId:number):string {
        return `this action return ${moviesId}`
    }
    
}