from flask import Flask, render_template, request, redirect, session
from forex_python.converter import CurrencyRates, CurrencyCodes, RatesNotAvailableError

app = Flask(__name__)
app.config['SECRET_KEY'] = 'Hurricane_Key'

currency_rate = CurrencyRates()
currency_code = CurrencyCodes()

@app.route('/')
def start_page():
    return render_template('index_flask_assessment.html')

@app.route('/error')
def get_error():
    msg = session['msg']
    return render_template('error_flask_assessment.html', msg=msg)

@app.route('/convert', methods=['POST'])
def convert_currency():
    currency_1 = request.form['from-curr'].upper()
    currency_2 = request.form['to-curr'].upper()
    amount_form = request.form['amount']
    
    #test if number
    try:
        amount = float(request.form['amount'])
    except ValueError:
        session['msg'] = f'{amount_form} is not a valid number!'
        return redirect('/error')
    
    #test country code
    try:
        result = rate.convert(currency_1, currency_2, amount)
    except RatesNotAvailableError:
        if currency_code.get_symbol(currency_1) is None:
            session['msg'] = f'{currency_1} is invalid'
        else:
            session['msg'] = f'{currency_2} is invalid'
        return redirect('/error')
    
    symbol = currency_code.get_symbol(currency_2)
    session['result'] = result
    session['symbol'] = symbol
    return redirect('/result') 
    
@app.route('/result')
def get_result():
    result = session['result']
    formatted_float = "{:.2f}".format(result)
    symbol = session['symbol']
    
    return render_template('result_flask_assessment.html', result=formatted_float, symbol=symbol)
    