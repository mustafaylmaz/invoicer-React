import * as React from "react";
import { useState } from "react";
import ClientDetails from "./components/ClientDetails";
import Dates from "./components/Dates";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainDetails from "./components/MainDetails";
import Notes from "./components/Notes";
import Table from "./components/Table";



function App() {
  const [showInvoice, setShowInvoice] = useState(false)
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bankName, setBankName] = useState("");
  const [bankAccount, setBankAccount] = useState("");
  const [website, setWebsite] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [notes, setNotes] = useState("");
  const [dueDate, setDueDate] = useState("");


  const handlePrint = () => {
    window.print()
  }


  return (
    <>
      <main className="m-5 p-5 xl:max-w-4xl xl:mx-auto bg-white rounded shadow">
        {
          showInvoice ?
            <div>
              <Header handlePrint={handlePrint} />
              <MainDetails name={name} address={address} />
              <ClientDetails />
              <Dates invoiceDate={invoiceDate} 
              invoiceNumber={invoiceNumber} 
              dueDate={dueDate} />
              <Table />
              <Notes />
              <Footer phone={phone} name={name} 
              address={address} website={website}
               email={email} />
              <button
                className="
              bg-blue-500 text-white 
              font-bold py-2 px-8 rounded shadow hover:bg-transparent hover:text-blue-500
              transition-all duration-300"
                onClick={(e) => { setShowInvoice(false) }}>
                Edit Information
              </button>

            </div>
            :
            <>
              <div className="flex flex-col justify-center items-center">
                <label htmlFor="name">Enter your name</label>
                <input type="text"
                  name="text"
                  id="address" placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoComplete="off" />

                <label htmlFor="address" >Enter your Address</label>
                <input type="text"
                  name="text"
                  id="address" placeholder="Enter your address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  autoComplete="off" />

                <label htmlFor="email" >Enter your E-Mail</label>
                <input type="text"
                  name="text"
                  id="email" placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="off" />

                <label htmlFor="phone">Enter your phone</label>
                <input type="text"
                  name="phone"
                  id="phone" placeholder="Enter your phon"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  autoComplete="off" />


                <label htmlFor="bankname" >Enter your bank name</label>
                <input type="text"
                  name="text"
                  id="bankname" placeholder="Enter your bank name"
                  value={bankName}
                  onChange={(e) => setBankName(e.target.value)}
                  autoComplete="off" />

                <label htmlFor="bankacc" >Enter your bank account</label>
                <input type="text"
                  name="text"
                  id="bankacc" placeholder="Enter your bank account"
                  value={bankAccount}
                  onChange={(e) => setBankAccount(e.target.value)}
                  autoComplete="off" />

                <label htmlFor="website" >Enter your website</label>
                <input type="text"
                  name="website"
                  id="website" placeholder="Enter your website"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  autoComplete="off" />

                <label htmlFor="clientname" >Enter your client name</label>
                <input type="text"
                  name="text"
                  id="clientname" placeholder="Enter your client name"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  autoComplete="off" />


                <label htmlFor="clientaddress" >Enter your client address</label>
                <input type="text"
                  name="text"
                  id="clientaddress" placeholder="Enter your client address"
                  value={clientAddress}
                  onChange={(e) => setClientAddress(e.target.value)}
                  autoComplete="off" />

                <label htmlFor="invoicenum" >Enter your invoice number</label>
                <input type="text"
                  name="text"
                  id="invoicenum" placeholder="Enter your invoice number"
                  value={invoiceNumber}
                  onChange={(e) => setInvoiceNumber(e.target.value)}
                  autoComplete="off" />

                <label htmlFor="invoicedate" >Enter your invoice date</label>
                <input type="text"
                  name="text"
                  id="invoicedate" placeholder="Enter your invoice date"
                  value={invoiceDate}
                  onChange={(e) => setInvoiceDate(e.target.value)}
                  autoComplete="off" />


                <label htmlFor="notes" >Enter your notes</label>
                <input type="text"
                  name="text"
                  id="notes" placeholder="Enter your notes"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  autoComplete="off" />





                <button
                  onClick={(e) => setShowInvoice(true)}
                  className="
              bg-blue-500 text-white 
              font-bold py-2 px-8 rounded shadow hover:bg-transparent hover:text-blue-500
              transition-all duration-300">
                  Preview Invoice
                </button>

              </div>
            </>

        }
      </main>
    </>
  );
}

export default App;
