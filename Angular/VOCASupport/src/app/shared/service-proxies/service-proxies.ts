//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.16.1.0 (NJsonSchema v10.7.2.0 (Newtonsoft.Json v13.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------

/* tslint:disable */
/* eslint-disable */
// ReSharper disable InconsistentNaming

import { mergeMap as _observableMergeMap, catchError as _observableCatch } from 'rxjs/operators';
import { Observable, throwError as _observableThrow, of as _observableOf } from 'rxjs';
import { Injectable, Inject, Optional, InjectionToken } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpResponseBase } from '@angular/common/http';

import * as moment from 'moment';

export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');

@Injectable()
export class LoginController {
    private http: HttpClient;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(HttpClient) http: HttpClient, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "https://localhost:7247";
    }

    /**
     * @param body (optional) 
     * @return Success
     */
    getUsrLogin(body: LoginModel | undefined): Observable<Tokens> {
        let url_ = this.baseUrl + "/api/login/GetUsrLogin";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json",
                "Accept": "text/plain"
            })
        };

        return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processGetUsrLogin(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGetUsrLogin(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<Tokens>;
                }
            } else
                return _observableThrow(response_) as any as Observable<Tokens>;
        }));
    }

    protected processGetUsrLogin(response: HttpResponseBase): Observable<Tokens> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = Tokens.fromJS(resultData200);
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<Tokens>(null as any);
    }
}

@Injectable()
export class UsersController {
    private http: HttpClient;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(HttpClient) http: HttpClient, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
    }

    /**
     * @return Success
     */
    getAll(): Observable<IntUser[]> {
        let url_ = this.baseUrl + "/api/users/GetAll";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "text/plain"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processGetAll(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGetAll(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<IntUser[]>;
                }
            } else
                return _observableThrow(response_) as any as Observable<IntUser[]>;
        }));
    }

    protected processGetAll(response: HttpResponseBase): Observable<IntUser[]> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(IntUser.fromJS(item));
            }
            else {
                result200 = <any>null;
            }
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<IntUser[]>();
    }

    /**
     * @param id (optional) 
     * @return Success
     */
    getById(id: number | undefined): Observable<void> {
        let url_ = this.baseUrl + "/api/users/GetById?";
        if (id === null)
            throw new Error("The parameter 'id' cannot be null.");
        else if (id !== undefined)
            url_ += "id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processGetById(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGetById(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<void>;
                }
            } else
                return _observableThrow(response_) as any as Observable<void>;
        }));
    }

    protected processGetById(response: HttpResponseBase): Observable<void> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return _observableOf<void>(null as any);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<void>(null as any);
    }

    /**
     * @param body (optional) 
     * @return Success
     */
    create(body: IntUser | undefined): Observable<void> {
        let url_ = this.baseUrl + "/api/users/Create";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json",
            })
        };

        return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processCreate(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processCreate(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<void>;
                }
            } else
                return _observableThrow(response_) as any as Observable<void>;
        }));
    }

    protected processCreate(response: HttpResponseBase): Observable<void> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return _observableOf<void>(null as any);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<void>(null as any);
    }

    /**
     * @param id (optional) 
     * @return Success
     */
    select(id: number | undefined): Observable<void> {
        let url_ = this.baseUrl + "/api/users/Select?";
        if (id === null)
            throw new Error("The parameter 'id' cannot be null.");
        else if (id !== undefined)
            url_ += "id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processSelect(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processSelect(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<void>;
                }
            } else
                return _observableThrow(response_) as any as Observable<void>;
        }));
    }

    protected processSelect(response: HttpResponseBase): Observable<void> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return _observableOf<void>(null as any);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<void>(null as any);
    }

    /**
     * @param id (optional) 
     * @param stat (optional) 
     * @return Success
     */
    updateStat(id: number | undefined, stat: boolean | undefined): Observable<void> {
        let url_ = this.baseUrl + "/api/users/UpdateStat?";
        if (id === null)
            throw new Error("The parameter 'id' cannot be null.");
        else if (id !== undefined)
            url_ += "id=" + encodeURIComponent("" + id) + "&";
        if (stat === null)
            throw new Error("The parameter 'stat' cannot be null.");
        else if (stat !== undefined)
            url_ += "stat=" + encodeURIComponent("" + stat) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
            })
        };

        return this.http.request("put", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processUpdateStat(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processUpdateStat(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<void>;
                }
            } else
                return _observableThrow(response_) as any as Observable<void>;
        }));
    }

    protected processUpdateStat(response: HttpResponseBase): Observable<void> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return _observableOf<void>(null as any);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<void>(null as any);
    }

    /**
     * @param iD (optional) 
     * @return Success
     */
    getById_SP(iD: number | undefined): Observable<void> {
        let url_ = this.baseUrl + "/api/users/GetById_SP?";
        if (iD === null)
            throw new Error("The parameter 'iD' cannot be null.");
        else if (iD !== undefined)
            url_ += "ID=" + encodeURIComponent("" + iD) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processGetById_SP(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGetById_SP(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<void>;
                }
            } else
                return _observableThrow(response_) as any as Observable<void>;
        }));
    }

    protected processGetById_SP(response: HttpResponseBase): Observable<void> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return _observableOf<void>(null as any);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<void>(null as any);
    }
}

export class IntUser implements IIntUser {
    usrId!: number;
    usrNm!: string | undefined;
    usrCat!: number;
    usrCat2!: number | undefined;
    usrPass!: string | undefined;
    usrKey!: string | undefined;
    usrLevel!: string | undefined;
    usrRealNm!: string | undefined;
    usrRealNmEn!: string | undefined;
    usrGender!: string | undefined;
    usrSisco!: string | undefined;
    usrGsm!: string | undefined;
    usrEmail!: string | undefined;
    usrExpCompStr!: string | undefined;
    usrExpNtfStr!: string | undefined;
    usrActive!: boolean;
    usrLastSeen!: moment.Moment | undefined;
    usrSusp!: boolean;
    usrIp!: string | undefined;
    usrVer!: string | undefined;
    usrWv!: boolean;
    usrCalCntr!: boolean | undefined;
    usrTkCount!: number;
    usrClsN!: number | undefined;
    usrFlN!: number | undefined;
    usrReOpY!: number | undefined;
    usrUnRead!: number | undefined;
    usrEventflowr!: number | undefined;
    usrEventColeg!: number | undefined;
    usrEventOther!: number | undefined;
    usrEvDy!: number | undefined;
    usrClsYdy!: number | undefined;
    usrReadYdy!: number | undefined;
    usrRecevDy!: number | undefined;
    usrClsUpdtd!: number | undefined;
    usrTikFlowDy!: number | undefined;
    usrTskOwnr!: number | undefined;
    usrEsc1!: number | undefined;
    usrEsc2!: number | undefined;
    usrEsc3!: number | undefined;
    usrBarcode!: string | undefined;
    usrLogSnd!: boolean | undefined;
    usrPassNew!: string | undefined;
    usrPic!: string | undefined;
    usrLevelNew!: string | undefined;

    constructor(data?: IIntUser) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.usrId = _data["usrId"];
            this.usrNm = _data["usrNm"];
            this.usrCat = _data["usrCat"];
            this.usrCat2 = _data["usrCat2"];
            this.usrPass = _data["usrPass"];
            this.usrKey = _data["usrKey"];
            this.usrLevel = _data["usrLevel"];
            this.usrRealNm = _data["usrRealNm"];
            this.usrRealNmEn = _data["usrRealNmEn"];
            this.usrGender = _data["usrGender"];
            this.usrSisco = _data["usrSisco"];
            this.usrGsm = _data["usrGsm"];
            this.usrEmail = _data["usrEmail"];
            this.usrExpCompStr = _data["usrExpCompStr"];
            this.usrExpNtfStr = _data["usrExpNtfStr"];
            this.usrActive = _data["usrActive"];
            this.usrLastSeen = _data["usrLastSeen"] ? moment(_data["usrLastSeen"].toString()) : <any>undefined;
            this.usrSusp = _data["usrSusp"];
            this.usrIp = _data["usrIp"];
            this.usrVer = _data["usrVer"];
            this.usrWv = _data["usrWv"];
            this.usrCalCntr = _data["usrCalCntr"];
            this.usrTkCount = _data["usrTkCount"];
            this.usrClsN = _data["usrClsN"];
            this.usrFlN = _data["usrFlN"];
            this.usrReOpY = _data["usrReOpY"];
            this.usrUnRead = _data["usrUnRead"];
            this.usrEventflowr = _data["usrEventflowr"];
            this.usrEventColeg = _data["usrEventColeg"];
            this.usrEventOther = _data["usrEventOther"];
            this.usrEvDy = _data["usrEvDy"];
            this.usrClsYdy = _data["usrClsYdy"];
            this.usrReadYdy = _data["usrReadYdy"];
            this.usrRecevDy = _data["usrRecevDy"];
            this.usrClsUpdtd = _data["usrClsUpdtd"];
            this.usrTikFlowDy = _data["usrTikFlowDy"];
            this.usrTskOwnr = _data["usrTskOwnr"];
            this.usrEsc1 = _data["usrEsc1"];
            this.usrEsc2 = _data["usrEsc2"];
            this.usrEsc3 = _data["usrEsc3"];
            this.usrBarcode = _data["usrBarcode"];
            this.usrLogSnd = _data["usrLogSnd"];
            this.usrPassNew = _data["usrPassNew"];
            this.usrPic = _data["usrPic"];
            this.usrLevelNew = _data["usrLevelNew"];
        }
    }

    static fromJS(data: any): IntUser {
        data = typeof data === 'object' ? data : {};
        let result = new IntUser();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["usrId"] = this.usrId;
        data["usrNm"] = this.usrNm;
        data["usrCat"] = this.usrCat;
        data["usrCat2"] = this.usrCat2;
        data["usrPass"] = this.usrPass;
        data["usrKey"] = this.usrKey;
        data["usrLevel"] = this.usrLevel;
        data["usrRealNm"] = this.usrRealNm;
        data["usrRealNmEn"] = this.usrRealNmEn;
        data["usrGender"] = this.usrGender;
        data["usrSisco"] = this.usrSisco;
        data["usrGsm"] = this.usrGsm;
        data["usrEmail"] = this.usrEmail;
        data["usrExpCompStr"] = this.usrExpCompStr;
        data["usrExpNtfStr"] = this.usrExpNtfStr;
        data["usrActive"] = this.usrActive;
        data["usrLastSeen"] = this.usrLastSeen ? this.usrLastSeen.toISOString() : <any>undefined;
        data["usrSusp"] = this.usrSusp;
        data["usrIp"] = this.usrIp;
        data["usrVer"] = this.usrVer;
        data["usrWv"] = this.usrWv;
        data["usrCalCntr"] = this.usrCalCntr;
        data["usrTkCount"] = this.usrTkCount;
        data["usrClsN"] = this.usrClsN;
        data["usrFlN"] = this.usrFlN;
        data["usrReOpY"] = this.usrReOpY;
        data["usrUnRead"] = this.usrUnRead;
        data["usrEventflowr"] = this.usrEventflowr;
        data["usrEventColeg"] = this.usrEventColeg;
        data["usrEventOther"] = this.usrEventOther;
        data["usrEvDy"] = this.usrEvDy;
        data["usrClsYdy"] = this.usrClsYdy;
        data["usrReadYdy"] = this.usrReadYdy;
        data["usrRecevDy"] = this.usrRecevDy;
        data["usrClsUpdtd"] = this.usrClsUpdtd;
        data["usrTikFlowDy"] = this.usrTikFlowDy;
        data["usrTskOwnr"] = this.usrTskOwnr;
        data["usrEsc1"] = this.usrEsc1;
        data["usrEsc2"] = this.usrEsc2;
        data["usrEsc3"] = this.usrEsc3;
        data["usrBarcode"] = this.usrBarcode;
        data["usrLogSnd"] = this.usrLogSnd;
        data["usrPassNew"] = this.usrPassNew;
        data["usrPic"] = this.usrPic;
        data["usrLevelNew"] = this.usrLevelNew;
        return data;
    }

    clone(): IntUser {
        const json = this.toJSON();
        let result = new IntUser();
        result.init(json);
        return result;
    }
}

export interface IIntUser {
    usrId: number;
    usrNm: string | undefined;
    usrCat: number;
    usrCat2: number | undefined;
    usrPass: string | undefined;
    usrKey: string | undefined;
    usrLevel: string | undefined;
    usrRealNm: string | undefined;
    usrRealNmEn: string | undefined;
    usrGender: string | undefined;
    usrSisco: string | undefined;
    usrGsm: string | undefined;
    usrEmail: string | undefined;
    usrExpCompStr: string | undefined;
    usrExpNtfStr: string | undefined;
    usrActive: boolean;
    usrLastSeen: moment.Moment | undefined;
    usrSusp: boolean;
    usrIp: string | undefined;
    usrVer: string | undefined;
    usrWv: boolean;
    usrCalCntr: boolean | undefined;
    usrTkCount: number;
    usrClsN: number | undefined;
    usrFlN: number | undefined;
    usrReOpY: number | undefined;
    usrUnRead: number | undefined;
    usrEventflowr: number | undefined;
    usrEventColeg: number | undefined;
    usrEventOther: number | undefined;
    usrEvDy: number | undefined;
    usrClsYdy: number | undefined;
    usrReadYdy: number | undefined;
    usrRecevDy: number | undefined;
    usrClsUpdtd: number | undefined;
    usrTikFlowDy: number | undefined;
    usrTskOwnr: number | undefined;
    usrEsc1: number | undefined;
    usrEsc2: number | undefined;
    usrEsc3: number | undefined;
    usrBarcode: string | undefined;
    usrLogSnd: boolean | undefined;
    usrPassNew: string | undefined;
    usrPic: string | undefined;
    usrLevelNew: string | undefined;
}

export class LoginModel implements ILoginModel {
    userName!: string | undefined;
    password!: string | undefined;

    constructor(data?: ILoginModel) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.userName = _data["userName"];
            this.password = _data["password"];
        }
    }

    static fromJS(data: any): LoginModel {
        data = typeof data === 'object' ? data : {};
        let result = new LoginModel();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["userName"] = this.userName;
        data["password"] = this.password;
        return data;
    }

    clone(): LoginModel {
        const json = this.toJSON();
        let result = new LoginModel();
        result.init(json);
        return result;
    }
}

export interface ILoginModel {
    userName: string | undefined;
    password: string | undefined;
}

export class Tokens implements ITokens {
    token!: string | undefined;
    refreshToken!: string | undefined;

    constructor(data?: ITokens) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.token = _data["token"];
            this.refreshToken = _data["refreshToken"];
        }
    }

    static fromJS(data: any): Tokens {
        data = typeof data === 'object' ? data : {};
        let result = new Tokens();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["token"] = this.token;
        data["refreshToken"] = this.refreshToken;
        return data;
    }

    clone(): Tokens {
        const json = this.toJSON();
        let result = new Tokens();
        result.init(json);
        return result;
    }
}

export interface ITokens {
    token: string | undefined;
    refreshToken: string | undefined;
}

export class ApiException extends Error {
    override message: string;
    status: number;
    response: string;
    headers: { [key: string]: any; };
    result: any;

    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isApiException = true;

    static isApiException(obj: any): obj is ApiException {
        return obj.isApiException === true;
    }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): Observable<any> {
    if (result !== null && result !== undefined)
        return _observableThrow(result);
    else
        return _observableThrow(new ApiException(message, status, response, headers, null));
}

function blobToText(blob: any): Observable<string> {
    return new Observable<string>((observer: any) => {
        if (!blob) {
            observer.next("");
            observer.complete();
        } else {
            let reader = new FileReader();
            reader.onload = event => {
                observer.next((event.target as any).result);
                observer.complete();
            };
            reader.readAsText(blob);
        }
    });
}