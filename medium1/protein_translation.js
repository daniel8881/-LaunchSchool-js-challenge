//Translation
//of_codon, input: string of code, string of protein
//of_rna, input: string of seires of code, array of protein


function ofCodon(code) {
    var codon = {
        Methionine: ['AUG'],
        Phenylalanine: ['UUU', 'UUC'],
        Leucine: ['UUA', 'UUG'],
        Serine: ['UCU', 'UCC', 'UCA', 'UCG'],
        Tyrosine: ['UAU', 'UAC'],
        Cysteine: ['UGU', 'UGC'],
        Tryptophan: ['UGG'],
        STOP: ['UAA', 'UAG', 'UGA']
    }

    var protein;

    Object.keys(codon).forEach(item => {
        if (codon[item].indexOf(code) > -1) {
            protein = item;
            return
        }
    })
    return protein;
}

function ofRna(strand) {
    var codons = [];
    for (var i = 0; i < strand.length; i += 3) {
        codons.push(strand.slice(i, i + 3));
    }

    var result = [];
    for (var j = 0; j < codons.length; j++) {
        if(!ofCodon(codons[j])){
          throw new Error('InvalidCodonError');
        }

        if (ofCodon(codons[j]) === 'STOP') {
            break;
        } else {
            result.push(ofCodon(codons[j]));
        }
    }

    return result;

}


console.log(ofRna('AUGUUUUGG'));