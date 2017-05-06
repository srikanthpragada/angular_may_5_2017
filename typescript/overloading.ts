// declare functions to be overloaded
function f1(x: number): void;
function f1(s: string): void;
function f1(x: number, s: string): void;
function f1(n: any, s?: any): void {
    console.log(`value is ${n}. Type is ${typeof (n)}`);
    if (s)
        console.log(`Second parameter is ${s}`);
}


f1("Abc");
f1(10);
f1(100, "PQR");