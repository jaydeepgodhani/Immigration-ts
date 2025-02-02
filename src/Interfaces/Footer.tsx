interface Footer {
  header: string;
  services: string[];
}
const f1:Footer = {header:'Service', services:['Visas', 'Passport', 'Doc Authentication']};
const f2:Footer = {header:'Solutions', services:['For Travel', 'For Business', 'For Partners']};
const f3:Footer = {header:'Information', services:['About Us', 'VisaHQ Reviews', 'Knowledge', 'News', 'Terms of Service', 'Privacy Policy']};
const f4:Footer = {header:'Contact Us', services:['Our Offices', 'Call Me']};

const Options: Footer[] = [f1, f2, f3, f4];
export default Options;