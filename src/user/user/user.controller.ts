import { 
    Controller, 
    Get, 
    Param, 
    Post, 
    Query, 
    Header, 
    HttpCode, 
    HttpRedirectResponse, 
    Redirect,
    Res, 
} from '@nestjs/common';

import { Response } from 'express';

@Controller('/api/user')
export class UserController {

    @Get('/view/hallo')
    viewHallo(@Query('name') name: string, @Res() res: Response) {
        res.render('index', { 
            title: 'Template Engine', 
            name: name
        });
    }

    @Get('/set-cookie')
    setCookie(@Query('name') name: string, @Res() response: Response) {
        response.cookie(name, name);
        response.status(200).send('success set cookeie')
    }

    @Get('/sample-response')
    @Header('Content-type', 'application/json')
    @HttpCode(200)
    sampleResponsr(): object{
        return({
            message: "success to get data", 
            data: "data"
        })
    }

    @Get('/redirect')
    @Redirect()
    redirect(): HttpRedirectResponse{
        return{
            url: "/api/user/sample-response", 
            statusCode: 301
        }
    }

    @Get('/hallo')
    async sayHallo(
        @Query('firstName') firstName: string,
        @Query('lastName') lastName: string,
    ): Promise<string> {
        return `hallo ${firstName} ${lastName}`;
    }    

    @Get('/:id')
    getById(
        @Param('id') id:string
    ): object{
        return {
            data: `get id: ${id}`,
        }
    }

    @Post()
    post(): object {
        return { 
            message: 'Data berhasil dikirim',
            status: 'success'
        };
    }

    @Get('/sample')
    get(): object {
        return { 
            message: 'hallo belajar nest' 
        };
    }
}
