def calculate_years(principal, interest, tax, desired):
    years = 0
    principal_plus_interest = 0
    interest_on_principal = 0
    principal_minus_tax = 0
    while principal < desired:
        interest_on_principal = principal * interest
        print(interest_on_principal)
        taxed_interest = interest_on_principal * tax
        print(taxed_interest)
        principal_plus_interest = principal + (interest_on_principal - taxed_interest)
        print(principal_plus_interest)
        principal = principal_plus_interest
        print(principal)
        years += 1
    return years    
    
    # return principal_minus_tax

print((calculate_years(1000, 0.05, 0.18, 1100)))

