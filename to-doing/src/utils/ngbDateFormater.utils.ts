
function padNumber(value: any) {
  if (!isNaN(value) && value !== null) {
    return `0${value}`.slice(-2);
  }
  return '';
}

// @Injectable()
// export class NgbDateCustomParserFormatter extends NgbDateParserFormatter {
  // parse(value: string): NgbDateStruct | null {
  //   console.log(value);

  //   if (value) {
  //     const dateParts = value.trim().split('/');

  //     let dateObj: any = { day: <any>null, month: <any>null, year: <any>null }
  //     const dateLabels = Object.keys(dateObj);

  //     dateParts.forEach((datePart, idx) => {
  //       dateObj[dateLabels[idx]] = parseInt(datePart, 10) || <any>null;
  //     });
  //     return dateObj;
  //   }
  //   return null;
  // }

  // static formatDate(date: NgbDateStruct | NgbDate | null): string {
  //   console.log('formater', date);

  //   return date ?
  //       `${padNumber(date.day)}/${padNumber(date.month)}/${date.year || ''}` :
  //       '';
  // }

  // format(date: NgbDateStruct | null): string {
  //   return NgbDateCustomParserFormatter.formatDate(date);
  // }
// }
