window.REPORT_DATA = {
  "version": "20260928-v3",
  "new_runs": 182,
  "reused_runs": 42,
  "unique_weights": 5,
  "groups": [
    {
      "encoder": "fire",
      "kind": "mix_pre",
      "mode": "B0",
      "budget": 16,
      "group": "main",
      "native_frames": 190,
      "native_dimension": 1280,
      "metrics_mean": {
        "digit_accuracy": 0.8593207465277778,
        "all_labeled_correct": 0.55078125,
        "overlap_digit_accuracy": 0.7923990885416666,
        "source_A_all_correct": 0.6171875,
        "source_B_all_correct": 0.625,
        "overlap_pair_set_accuracy": 0.8984375,
        "source_swap_rate_given_pair_recovered": 0.12235009033199078
      },
      "metrics_seed_sd": {
        "digit_accuracy": 0.010649723053224787,
        "all_labeled_correct": 0.04078244730043184,
        "overlap_digit_accuracy": 0.015739656028689084,
        "source_A_all_correct": 0.021417687694786434,
        "source_B_all_correct": 0.03219695609733308,
        "overlap_pair_set_accuracy": 0.025414089218111533,
        "source_swap_rate_given_pair_recovered": 0.0033550018138733826
      },
      "per_seed": {
        "0": {
          "digit_accuracy": 0.85400390625,
          "all_labeled_correct": 0.53125,
          "digit_accuracy_by_position": [
            0.99365234375,
            0.87158203125,
            0.69677734375
          ],
          "overlap_digit_accuracy": 0.7841796875,
          "source_A_all_correct": 0.6123046875,
          "source_B_all_correct": 0.6083984375,
          "pair_set_accuracy_by_position": [
            0.9892578125,
            0.912109375,
            0.8583984375
          ],
          "overlap_pair_set_accuracy": 0.88525390625,
          "source_swap_rate_given_pair_recovered": 0.12431372549019608,
          "loss": 0.43620109744369984
        },
        "1": {
          "digit_accuracy": 0.8523763020833334,
          "all_labeled_correct": 0.5234375,
          "digit_accuracy_by_position": [
            0.9921875,
            0.892578125,
            0.67236328125
          ],
          "overlap_digit_accuracy": 0.782470703125,
          "source_A_all_correct": 0.5986328125,
          "source_B_all_correct": 0.6044921875,
          "pair_set_accuracy_by_position": [
            0.9873046875,
            0.916015625,
            0.8486328125
          ],
          "overlap_pair_set_accuracy": 0.88232421875,
          "source_swap_rate_given_pair_recovered": 0.1242603550295858,
          "loss": 0.4973529353737831
        },
        "2": {
          "digit_accuracy": 0.87158203125,
          "all_labeled_correct": 0.59765625,
          "digit_accuracy_by_position": [
            0.99365234375,
            0.88671875,
            0.734375
          ],
          "overlap_digit_accuracy": 0.810546875,
          "source_A_all_correct": 0.640625,
          "source_B_all_correct": 0.662109375,
          "pair_set_accuracy_by_position": [
            0.9931640625,
            0.9404296875,
            0.9150390625
          ],
          "overlap_pair_set_accuracy": 0.927734375,
          "source_swap_rate_given_pair_recovered": 0.11847619047619047,
          "loss": 0.7334751524031162
        }
      },
      "high_overlap": {
        "examples": 191,
        "digit_accuracy": 0.8429319371727747,
        "all_labeled_correct": 0.48342059336823734
      },
      "trainable_parameters": 1162890,
      "inference_parameters": 1162890,
      "zero_accuracy": 0.09966362847222222,
      "wrong_context_accuracy": 0.10416666666666667
    },
    {
      "encoder": "fire",
      "kind": "mix_pre",
      "mode": "B1",
      "budget": 16,
      "group": "main",
      "native_frames": 190,
      "native_dimension": 1280,
      "metrics_mean": {
        "digit_accuracy": 0.884006076388889,
        "all_labeled_correct": 0.6207682291666666,
        "overlap_digit_accuracy": 0.8290201822916666,
        "source_A_all_correct": 0.6829427083333334,
        "source_B_all_correct": 0.6920572916666666,
        "overlap_pair_set_accuracy": 0.9099934895833334,
        "source_swap_rate_given_pair_recovered": 0.09789193810314316
      },
      "metrics_seed_sd": {
        "digit_accuracy": 0.006750797721704933,
        "all_labeled_correct": 0.007893460711576915,
        "overlap_digit_accuracy": 0.009481754718205603,
        "source_A_all_correct": 0.019563775001714478,
        "source_B_all_correct": 0.016466978997319973,
        "overlap_pair_set_accuracy": 0.014585912567209989,
        "source_swap_rate_given_pair_recovered": 0.012384894275705122
      },
      "per_seed": {
        "0": {
          "digit_accuracy": 0.88232421875,
          "all_labeled_correct": 0.6220703125,
          "digit_accuracy_by_position": [
            0.99462890625,
            0.9189453125,
            0.7333984375
          ],
          "overlap_digit_accuracy": 0.826171875,
          "source_A_all_correct": 0.681640625,
          "source_B_all_correct": 0.6845703125,
          "pair_set_accuracy_by_position": [
            0.9912109375,
            0.9306640625,
            0.8994140625
          ],
          "overlap_pair_set_accuracy": 0.9150390625,
          "source_swap_rate_given_pair_recovered": 0.10069177555726365,
          "loss": 0.5622836481779814
        },
        "1": {
          "digit_accuracy": 0.8782552083333334,
          "all_labeled_correct": 0.6123046875,
          "digit_accuracy_by_position": [
            0.9921875,
            0.91455078125,
            0.72802734375
          ],
          "overlap_digit_accuracy": 0.8212890625,
          "source_A_all_correct": 0.6640625,
          "source_B_all_correct": 0.6806640625,
          "pair_set_accuracy_by_position": [
            0.9892578125,
            0.9375,
            0.9052734375
          ],
          "overlap_pair_set_accuracy": 0.92138671875,
          "source_swap_rate_given_pair_recovered": 0.10863723608445297,
          "loss": 0.6442641969770193
        },
        "2": {
          "digit_accuracy": 0.8914388020833334,
          "all_labeled_correct": 0.6279296875,
          "digit_accuracy_by_position": [
            0.9951171875,
            0.927734375,
            0.75146484375
          ],
          "overlap_digit_accuracy": 0.839599609375,
          "source_A_all_correct": 0.703125,
          "source_B_all_correct": 0.7109375,
          "pair_set_accuracy_by_position": [
            0.9921875,
            0.921875,
            0.865234375
          ],
          "overlap_pair_set_accuracy": 0.8935546875,
          "source_swap_rate_given_pair_recovered": 0.08434680266771283,
          "loss": 0.6288948431611061
        }
      },
      "high_overlap": {
        "examples": 191,
        "digit_accuracy": 0.8766724840023269,
        "all_labeled_correct": 0.5584642233856894
      },
      "trainable_parameters": 1760532,
      "inference_parameters": 1162890,
      "zero_accuracy": 0.09792751736111112,
      "wrong_context_accuracy": 0.10454644097222221
    },
    {
      "encoder": "fire",
      "kind": "mix_pre",
      "mode": "B2",
      "budget": 16,
      "group": "main",
      "native_frames": 190,
      "native_dimension": 1280,
      "metrics_mean": {
        "digit_accuracy": 0.9129231770833334,
        "all_labeled_correct": 0.7067057291666666,
        "overlap_digit_accuracy": 0.8721516927083334,
        "source_A_all_correct": 0.751953125,
        "source_B_all_correct": 0.7669270833333334,
        "overlap_pair_set_accuracy": 0.9353841145833334,
        "source_swap_rate_given_pair_recovered": 0.07332996532728621
      },
      "metrics_seed_sd": {
        "digit_accuracy": 0.021064115830198234,
        "all_labeled_correct": 0.06372647119287725,
        "overlap_digit_accuracy": 0.03181830856165888,
        "source_A_all_correct": 0.05861815897835515,
        "source_B_all_correct": 0.058319126397293454,
        "overlap_pair_set_accuracy": 0.01688869721041766,
        "source_swap_rate_given_pair_recovered": 0.020698941426538796
      },
      "per_seed": {
        "0": {
          "digit_accuracy": 0.9329427083333334,
          "all_labeled_correct": 0.7734375,
          "digit_accuracy_by_position": [
            0.99365234375,
            0.94189453125,
            0.86328125
          ],
          "overlap_digit_accuracy": 0.902587890625,
          "source_A_all_correct": 0.8095703125,
          "source_B_all_correct": 0.8193359375,
          "pair_set_accuracy_by_position": [
            0.9892578125,
            0.9599609375,
            0.94921875
          ],
          "overlap_pair_set_accuracy": 0.95458984375,
          "source_swap_rate_given_pair_recovered": 0.05620082427875609,
          "loss": 0.36390055902302265
        },
        "1": {
          "digit_accuracy": 0.8909505208333334,
          "all_labeled_correct": 0.646484375,
          "digit_accuracy_by_position": [
            0.99462890625,
            0.93017578125,
            0.748046875
          ],
          "overlap_digit_accuracy": 0.839111328125,
          "source_A_all_correct": 0.6923828125,
          "source_B_all_correct": 0.7041015625,
          "pair_set_accuracy_by_position": [
            0.9921875,
            0.95703125,
            0.900390625
          ],
          "overlap_pair_set_accuracy": 0.9287109375,
          "source_swap_rate_given_pair_recovered": 0.0963302752293578,
          "loss": 0.6869204081594944
        },
        "2": {
          "digit_accuracy": 0.9148763020833334,
          "all_labeled_correct": 0.7001953125,
          "digit_accuracy_by_position": [
            0.9951171875,
            0.94140625,
            0.80810546875
          ],
          "overlap_digit_accuracy": 0.874755859375,
          "source_A_all_correct": 0.75390625,
          "source_B_all_correct": 0.77734375,
          "pair_set_accuracy_by_position": [
            0.9921875,
            0.953125,
            0.892578125
          ],
          "overlap_pair_set_accuracy": 0.9228515625,
          "source_swap_rate_given_pair_recovered": 0.06745879647374473,
          "loss": 0.4893005257472396
        }
      },
      "high_overlap": {
        "examples": 191,
        "digit_accuracy": 0.8947062245491567,
        "all_labeled_correct": 0.6230366492146596
      },
      "trainable_parameters": 1760788,
      "inference_parameters": 1229706,
      "zero_accuracy": 0.0973849826388889,
      "wrong_context_accuracy": 0.10367838541666667
    },
    {
      "encoder": "fire",
      "kind": "mix_pre",
      "mode": "B0",
      "budget": 8,
      "group": "main",
      "native_frames": 190,
      "native_dimension": 1280,
      "metrics_mean": {
        "digit_accuracy": 0.8684895833333334,
        "all_labeled_correct": 0.5849609375,
        "overlap_digit_accuracy": 0.8065592447916666,
        "source_A_all_correct": 0.640625,
        "source_B_all_correct": 0.6555989583333334,
        "overlap_pair_set_accuracy": 0.9148763020833334,
        "source_swap_rate_given_pair_recovered": 0.11683950867095572
      },
      "metrics_seed_sd": {
        "digit_accuracy": 0.009281625930588054,
        "all_labeled_correct": 0.041581384484460485,
        "overlap_digit_accuracy": 0.014290744599754535,
        "source_A_all_correct": 0.0225245363177164,
        "source_B_all_correct": 0.03248202095597062,
        "overlap_pair_set_accuracy": 0.015489627608043791,
        "source_swap_rate_given_pair_recovered": 0.006979111843172051
      },
      "per_seed": {
        "0": {
          "digit_accuracy": 0.8590494791666666,
          "all_labeled_correct": 0.544921875,
          "digit_accuracy_by_position": [
            0.9931640625,
            0.900390625,
            0.68359375
          ],
          "overlap_digit_accuracy": 0.7919921875,
          "source_A_all_correct": 0.615234375,
          "source_B_all_correct": 0.630859375,
          "pair_set_accuracy_by_position": [
            0.98828125,
            0.927734375,
            0.869140625
          ],
          "overlap_pair_set_accuracy": 0.8984375,
          "source_swap_rate_given_pair_recovered": 0.12305900621118013,
          "loss": 0.44853040762245655
        },
        "1": {
          "digit_accuracy": 0.8776041666666666,
          "all_labeled_correct": 0.6279296875,
          "digit_accuracy_by_position": [
            0.99169921875,
            0.88623046875,
            0.7548828125
          ],
          "overlap_digit_accuracy": 0.820556640625,
          "source_A_all_correct": 0.658203125,
          "source_B_all_correct": 0.6923828125,
          "pair_set_accuracy_by_position": [
            0.9912109375,
            0.9404296875,
            0.91796875
          ],
          "overlap_pair_set_accuracy": 0.92919921875,
          "source_swap_rate_given_pair_recovered": 0.10929169840060929,
          "loss": 0.6678271722048521
        },
        "2": {
          "digit_accuracy": 0.8688151041666666,
          "all_labeled_correct": 0.58203125,
          "digit_accuracy_by_position": [
            0.9921875,
            0.90673828125,
            0.70751953125
          ],
          "overlap_digit_accuracy": 0.80712890625,
          "source_A_all_correct": 0.6484375,
          "source_B_all_correct": 0.6435546875,
          "pair_set_accuracy_by_position": [
            0.9892578125,
            0.9326171875,
            0.9013671875
          ],
          "overlap_pair_set_accuracy": 0.9169921875,
          "source_swap_rate_given_pair_recovered": 0.11816782140107775,
          "loss": 0.5213039107620716
        }
      },
      "high_overlap": {
        "examples": 191,
        "digit_accuracy": 0.8481675392670157,
        "all_labeled_correct": 0.5078534031413612
      },
      "trainable_parameters": 1161866,
      "inference_parameters": 1161866,
      "zero_accuracy": 0.10362413194444443,
      "wrong_context_accuracy": 0.10514322916666667
    },
    {
      "encoder": "fire",
      "kind": "mix_pre",
      "mode": "B1",
      "budget": 8,
      "group": "main",
      "native_frames": 190,
      "native_dimension": 1280,
      "metrics_mean": {
        "digit_accuracy": 0.8805338541666666,
        "all_labeled_correct": 0.615234375,
        "overlap_digit_accuracy": 0.823974609375,
        "source_A_all_correct": 0.6676432291666666,
        "source_B_all_correct": 0.6751302083333334,
        "overlap_pair_set_accuracy": 0.9269205729166666,
        "source_swap_rate_given_pair_recovered": 0.1068597427107419
      },
      "metrics_seed_sd": {
        "digit_accuracy": 0.0038892588363764837,
        "all_labeled_correct": 0.010563138502335907,
        "overlap_digit_accuracy": 0.006712757365657969,
        "source_A_all_correct": 0.007329642089321422,
        "source_B_all_correct": 0.01044206701324573,
        "overlap_pair_set_accuracy": 0.01579447076036215,
        "source_swap_rate_given_pair_recovered": 0.009789225351356262
      },
      "per_seed": {
        "0": {
          "digit_accuracy": 0.884765625,
          "all_labeled_correct": 0.603515625,
          "digit_accuracy_by_position": [
            0.99169921875,
            0.92333984375,
            0.7392578125
          ],
          "overlap_digit_accuracy": 0.831298828125,
          "source_A_all_correct": 0.671875,
          "source_B_all_correct": 0.6865234375,
          "pair_set_accuracy_by_position": [
            0.9853515625,
            0.9345703125,
            0.8837890625
          ],
          "overlap_pair_set_accuracy": 0.9091796875,
          "source_swap_rate_given_pair_recovered": 0.09623593325572372,
          "loss": 0.6197272818535566
        },
        "1": {
          "digit_accuracy": 0.8771158854166666,
          "all_labeled_correct": 0.6181640625,
          "digit_accuracy_by_position": [
            0.9951171875,
            0.912109375,
            0.72412109375
          ],
          "overlap_digit_accuracy": 0.818115234375,
          "source_A_all_correct": 0.6591796875,
          "source_B_all_correct": 0.666015625,
          "pair_set_accuracy_by_position": [
            0.990234375,
            0.9462890625,
            0.9326171875
          ],
          "overlap_pair_set_accuracy": 0.939453125,
          "source_swap_rate_given_pair_recovered": 0.11551528878822197,
          "loss": 0.8370458334684372
        },
        "2": {
          "digit_accuracy": 0.8797200520833334,
          "all_labeled_correct": 0.6240234375,
          "digit_accuracy_by_position": [
            0.994140625,
            0.92529296875,
            0.7197265625
          ],
          "overlap_digit_accuracy": 0.822509765625,
          "source_A_all_correct": 0.671875,
          "source_B_all_correct": 0.6728515625,
          "pair_set_accuracy_by_position": [
            0.9892578125,
            0.9443359375,
            0.919921875
          ],
          "overlap_pair_set_accuracy": 0.93212890625,
          "source_swap_rate_given_pair_recovered": 0.10882800608828005,
          "loss": 0.6901747435331345
        }
      },
      "high_overlap": {
        "examples": 191,
        "digit_accuracy": 0.8772542175683538,
        "all_labeled_correct": 0.581151832460733
      },
      "trainable_parameters": 1759508,
      "inference_parameters": 1161866,
      "zero_accuracy": 0.09939236111111112,
      "wrong_context_accuracy": 0.10530598958333333
    },
    {
      "encoder": "fire",
      "kind": "mix_pre",
      "mode": "B2",
      "budget": 8,
      "group": "main",
      "native_frames": 190,
      "native_dimension": 1280,
      "metrics_mean": {
        "digit_accuracy": 0.9376085069444445,
        "all_labeled_correct": 0.7776692708333334,
        "overlap_digit_accuracy": 0.9086100260416666,
        "source_A_all_correct": 0.8193359375,
        "source_B_all_correct": 0.8375651041666666,
        "overlap_pair_set_accuracy": 0.94189453125,
        "source_swap_rate_given_pair_recovered": 0.047298812138082354
      },
      "metrics_seed_sd": {
        "digit_accuracy": 0.02007591075922383,
        "all_labeled_correct": 0.06192001811524224,
        "overlap_digit_accuracy": 0.02889673574771677,
        "source_A_all_correct": 0.05064020375962568,
        "source_B_all_correct": 0.059163355488424926,
        "overlap_pair_set_accuracy": 0.007042092334890604,
        "source_swap_rate_given_pair_recovered": 0.02077549687343674
      },
      "per_seed": {
        "0": {
          "digit_accuracy": 0.9358723958333334,
          "all_labeled_correct": 0.765625,
          "digit_accuracy_by_position": [
            0.99560546875,
            0.94091796875,
            0.87109375
          ],
          "overlap_digit_accuracy": 0.906005859375,
          "source_A_all_correct": 0.8125,
          "source_B_all_correct": 0.833984375,
          "pair_set_accuracy_by_position": [
            0.9931640625,
            0.9501953125,
            0.921875
          ],
          "overlap_pair_set_accuracy": 0.93603515625,
          "source_swap_rate_given_pair_recovered": 0.04778156996587031,
          "loss": 0.4035055013373494
        },
        "1": {
          "digit_accuracy": 0.91845703125,
          "all_labeled_correct": 0.72265625,
          "digit_accuracy_by_position": [
            0.9931640625,
            0.9248046875,
            0.83740234375
          ],
          "overlap_digit_accuracy": 0.881103515625,
          "source_A_all_correct": 0.7724609375,
          "source_B_all_correct": 0.7802734375,
          "pair_set_accuracy_by_position": [
            0.986328125,
            0.9541015625,
            0.92578125
          ],
          "overlap_pair_set_accuracy": 0.93994140625,
          "source_swap_rate_given_pair_recovered": 0.06782872300113679,
          "loss": 0.4826648682355881
        },
        "2": {
          "digit_accuracy": 0.95849609375,
          "all_labeled_correct": 0.8447265625,
          "digit_accuracy_by_position": [
            0.998046875,
            0.95166015625,
            0.92578125
          ],
          "overlap_digit_accuracy": 0.938720703125,
          "source_A_all_correct": 0.873046875,
          "source_B_all_correct": 0.8984375,
          "pair_set_accuracy_by_position": [
            0.99609375,
            0.9501953125,
            0.94921875
          ],
          "overlap_pair_set_accuracy": 0.94970703125,
          "source_swap_rate_given_pair_recovered": 0.026286143447239955,
          "loss": 0.24137054570019245
        }
      },
      "high_overlap": {
        "examples": 191,
        "digit_accuracy": 0.9293193717277489,
        "all_labeled_correct": 0.7068062827225131
      },
      "trainable_parameters": 1759764,
      "inference_parameters": 1228682,
      "zero_accuracy": 0.1015625,
      "wrong_context_accuracy": 0.10443793402777778
    },
    {
      "encoder": "fire",
      "kind": "mix_pre",
      "mode": "B0",
      "budget": 4,
      "group": "main",
      "native_frames": 190,
      "native_dimension": 1280,
      "metrics_mean": {
        "digit_accuracy": 0.8379991319444443,
        "all_labeled_correct": 0.4619140625,
        "overlap_digit_accuracy": 0.7618815104166666,
        "source_A_all_correct": 0.5706380208333334,
        "source_B_all_correct": 0.5836588541666666,
        "overlap_pair_set_accuracy": 0.8191731770833334,
        "source_swap_rate_given_pair_recovered": 0.12363198306329677
      },
      "metrics_seed_sd": {
        "digit_accuracy": 0.04408985119721413,
        "all_labeled_correct": 0.18972475694657642,
        "overlap_digit_accuracy": 0.06781852753977462,
        "source_A_all_correct": 0.09377712281266062,
        "source_B_all_correct": 0.11306355924234907,
        "overlap_pair_set_accuracy": 0.16436618370326103,
        "source_swap_rate_given_pair_recovered": 0.00853633102668586
      },
      "per_seed": {
        "0": {
          "digit_accuracy": 0.853515625,
          "all_labeled_correct": 0.5322265625,
          "digit_accuracy_by_position": [
            0.99072265625,
            0.9130859375,
            0.65673828125
          ],
          "overlap_digit_accuracy": 0.784912109375,
          "source_A_all_correct": 0.6083984375,
          "source_B_all_correct": 0.6064453125,
          "pair_set_accuracy_by_position": [
            0.98828125,
            0.9384765625,
            0.865234375
          ],
          "overlap_pair_set_accuracy": 0.90185546875,
          "source_swap_rate_given_pair_recovered": 0.13060428849902533,
          "loss": 0.6216791737824678
        },
        "1": {
          "digit_accuracy": 0.8722330729166666,
          "all_labeled_correct": 0.6064453125,
          "digit_accuracy_by_position": [
            0.986328125,
            0.89892578125,
            0.7314453125
          ],
          "overlap_digit_accuracy": 0.815185546875,
          "source_A_all_correct": 0.6396484375,
          "source_B_all_correct": 0.68359375,
          "pair_set_accuracy_by_position": [
            0.986328125,
            0.9326171875,
            0.9189453125
          ],
          "overlap_pair_set_accuracy": 0.92578125,
          "source_swap_rate_given_pair_recovered": 0.11411182959300115,
          "loss": 0.5573358852416277
        },
        "2": {
          "digit_accuracy": 0.7882486979166666,
          "all_labeled_correct": 0.2470703125,
          "digit_accuracy_by_position": [
            0.99365234375,
            0.771484375,
            0.599609375
          ],
          "overlap_digit_accuracy": 0.685546875,
          "source_A_all_correct": 0.4638671875,
          "source_B_all_correct": 0.4609375,
          "pair_set_accuracy_by_position": [
            0.98828125,
            0.7177734375,
            0.5419921875
          ],
          "overlap_pair_set_accuracy": 0.6298828125,
          "source_swap_rate_given_pair_recovered": 0.12617983109786388,
          "loss": 0.5087186563760042
        }
      },
      "high_overlap": {
        "examples": 191,
        "digit_accuracy": 0.8260616637579989,
        "all_labeled_correct": 0.4153577661431065
      },
      "trainable_parameters": 1161354,
      "inference_parameters": 1161354,
      "zero_accuracy": 0.10286458333333333,
      "wrong_context_accuracy": 0.10416666666666667
    },
    {
      "encoder": "fire",
      "kind": "mix_pre",
      "mode": "B1",
      "budget": 4,
      "group": "main",
      "native_frames": 190,
      "native_dimension": 1280,
      "metrics_mean": {
        "digit_accuracy": 0.8917100694444445,
        "all_labeled_correct": 0.6474609375,
        "overlap_digit_accuracy": 0.84033203125,
        "source_A_all_correct": 0.7037760416666666,
        "source_B_all_correct": 0.7014973958333334,
        "overlap_pair_set_accuracy": 0.9267578125,
        "source_swap_rate_given_pair_recovered": 0.09395931946427494
      },
      "metrics_seed_sd": {
        "digit_accuracy": 0.01035715694388255,
        "all_labeled_correct": 0.009618025197066508,
        "overlap_digit_accuracy": 0.014818350493646014,
        "source_A_all_correct": 0.0319491691596744,
        "source_B_all_correct": 0.027139536910279566,
        "overlap_pair_set_accuracy": 0.0249597224983048,
        "source_swap_rate_given_pair_recovered": 0.019521282517767257
      },
      "per_seed": {
        "0": {
          "digit_accuracy": 0.8850911458333334,
          "all_labeled_correct": 0.6396484375,
          "digit_accuracy_by_position": [
            0.9931640625,
            0.9208984375,
            0.7412109375
          ],
          "overlap_digit_accuracy": 0.8310546875,
          "source_A_all_correct": 0.6806640625,
          "source_B_all_correct": 0.6904296875,
          "pair_set_accuracy_by_position": [
            0.990234375,
            0.953125,
            0.927734375
          ],
          "overlap_pair_set_accuracy": 0.9404296875,
          "source_swap_rate_given_pair_recovered": 0.10582010582010581,
          "loss": 0.7649599052965641
        },
        "1": {
          "digit_accuracy": 0.8863932291666666,
          "all_labeled_correct": 0.64453125,
          "digit_accuracy_by_position": [
            0.994140625,
            0.9189453125,
            0.74609375
          ],
          "overlap_digit_accuracy": 0.83251953125,
          "source_A_all_correct": 0.6904296875,
          "source_B_all_correct": 0.681640625,
          "pair_set_accuracy_by_position": [
            0.9931640625,
            0.9443359375,
            0.939453125
          ],
          "overlap_pair_set_accuracy": 0.94189453125,
          "source_swap_rate_given_pair_recovered": 0.10462928114414753,
          "loss": 0.7554463241249323
        },
        "2": {
          "digit_accuracy": 0.9036458333333334,
          "all_labeled_correct": 0.658203125,
          "digit_accuracy_by_position": [
            0.99609375,
            0.88232421875,
            0.83251953125
          ],
          "overlap_digit_accuracy": 0.857421875,
          "source_A_all_correct": 0.740234375,
          "source_B_all_correct": 0.732421875,
          "pair_set_accuracy_by_position": [
            0.9921875,
            0.9072265625,
            0.888671875
          ],
          "overlap_pair_set_accuracy": 0.89794921875,
          "source_swap_rate_given_pair_recovered": 0.07142857142857142,
          "loss": 0.4477203171700239
        }
      },
      "high_overlap": {
        "examples": 191,
        "digit_accuracy": 0.8801628853984876,
        "all_labeled_correct": 0.581151832460733
      },
      "trainable_parameters": 1758996,
      "inference_parameters": 1161354,
      "zero_accuracy": 0.09917534722222222,
      "wrong_context_accuracy": 0.10546875
    },
    {
      "encoder": "fire",
      "kind": "mix_pre",
      "mode": "B2",
      "budget": 4,
      "group": "main",
      "native_frames": 190,
      "native_dimension": 1280,
      "metrics_mean": {
        "digit_accuracy": 0.8927951388888888,
        "all_labeled_correct": 0.6468098958333334,
        "overlap_digit_accuracy": 0.842041015625,
        "source_A_all_correct": 0.6988932291666666,
        "source_B_all_correct": 0.7164713541666666,
        "overlap_pair_set_accuracy": 0.91943359375,
        "source_swap_rate_given_pair_recovered": 0.09095125866076344
      },
      "metrics_seed_sd": {
        "digit_accuracy": 0.010112561979987117,
        "all_labeled_correct": 0.014659284178642842,
        "overlap_digit_accuracy": 0.014946511586927702,
        "source_A_all_correct": 0.02547187520766879,
        "source_B_all_correct": 0.02535930560359677,
        "overlap_pair_set_accuracy": 0.008829658847668518,
        "source_swap_rate_given_pair_recovered": 0.01487393694148881
      },
      "per_seed": {
        "0": {
          "digit_accuracy": 0.9025065104166666,
          "all_labeled_correct": 0.6611328125,
          "digit_accuracy_by_position": [
            0.9951171875,
            0.927734375,
            0.78466796875
          ],
          "overlap_digit_accuracy": 0.856201171875,
          "source_A_all_correct": 0.7177734375,
          "source_B_all_correct": 0.744140625,
          "pair_set_accuracy_by_position": [
            0.9921875,
            0.9423828125,
            0.8798828125
          ],
          "overlap_pair_set_accuracy": 0.9111328125,
          "source_swap_rate_given_pair_recovered": 0.0770123839009288,
          "loss": 0.5533017255365849
        },
        "1": {
          "digit_accuracy": 0.8935546875,
          "all_labeled_correct": 0.6474609375,
          "digit_accuracy_by_position": [
            0.99365234375,
            0.92578125,
            0.76123046875
          ],
          "overlap_digit_accuracy": 0.843505859375,
          "source_A_all_correct": 0.708984375,
          "source_B_all_correct": 0.7109375,
          "pair_set_accuracy_by_position": [
            0.9921875,
            0.9384765625,
            0.8984375
          ],
          "overlap_pair_set_accuracy": 0.91845703125,
          "source_swap_rate_given_pair_recovered": 0.08923076923076922,
          "loss": 0.6707034595310688
        },
        "2": {
          "digit_accuracy": 0.88232421875,
          "all_labeled_correct": 0.6318359375,
          "digit_accuracy_by_position": [
            0.994140625,
            0.92041015625,
            0.732421875
          ],
          "overlap_digit_accuracy": 0.826416015625,
          "source_A_all_correct": 0.669921875,
          "source_B_all_correct": 0.6943359375,
          "pair_set_accuracy_by_position": [
            0.9921875,
            0.9453125,
            0.912109375
          ],
          "overlap_pair_set_accuracy": 0.9287109375,
          "source_swap_rate_given_pair_recovered": 0.10661062285059228,
          "loss": 0.6041468605399132
        }
      },
      "high_overlap": {
        "examples": 191,
        "digit_accuracy": 0.8720186154741131,
        "all_labeled_correct": 0.5706806282722513
      },
      "trainable_parameters": 1759252,
      "inference_parameters": 1228170,
      "zero_accuracy": 0.1022677951388889,
      "wrong_context_accuracy": 0.1042209201388889
    },
    {
      "encoder": "qwen",
      "kind": "mix_post",
      "mode": "B0",
      "budget": 16,
      "group": "main",
      "native_frames": 49,
      "native_dimension": 2048,
      "metrics_mean": {
        "digit_accuracy": 0.804904513888889,
        "all_labeled_correct": 0.4736328125,
        "overlap_digit_accuracy": 0.7141927083333334,
        "source_A_all_correct": 0.517578125,
        "source_B_all_correct": 0.5159505208333334,
        "overlap_pair_set_accuracy": 0.93115234375,
        "source_swap_rate_given_pair_recovered": 0.19386127518143684
      },
      "metrics_seed_sd": {
        "digit_accuracy": 0.0024486293611972036,
        "all_labeled_correct": 0.0068359375,
        "overlap_digit_accuracy": 0.004314686244079284,
        "source_A_all_correct": 0.011005300458578754,
        "source_B_all_correct": 0.009974969691435262,
        "overlap_pair_set_accuracy": 0.010563138502335907,
        "source_swap_rate_given_pair_recovered": 0.003305867682525671
      },
      "per_seed": {
        "0": {
          "digit_accuracy": 0.80615234375,
          "all_labeled_correct": 0.4814453125,
          "digit_accuracy_by_position": [
            0.984375,
            0.7314453125,
            0.70263671875
          ],
          "overlap_digit_accuracy": 0.717041015625,
          "source_A_all_correct": 0.5302734375,
          "source_B_all_correct": 0.5087890625,
          "pair_set_accuracy_by_position": [
            0.982421875,
            0.935546875,
            0.9501953125
          ],
          "overlap_pair_set_accuracy": 0.94287109375,
          "source_swap_rate_given_pair_recovered": 0.19532428355957768,
          "loss": 0.8287327997386456
        },
        "1": {
          "digit_accuracy": 0.8064778645833334,
          "all_labeled_correct": 0.470703125,
          "digit_accuracy_by_position": [
            0.98681640625,
            0.72021484375,
            0.71240234375
          ],
          "overlap_digit_accuracy": 0.71630859375,
          "source_A_all_correct": 0.5107421875,
          "source_B_all_correct": 0.52734375,
          "pair_set_accuracy_by_position": [
            0.98828125,
            0.9296875,
            0.9150390625
          ],
          "overlap_pair_set_accuracy": 0.92236328125,
          "source_swap_rate_given_pair_recovered": 0.1900763358778626,
          "loss": 0.8424875251948833
        },
        "2": {
          "digit_accuracy": 0.8020833333333334,
          "all_labeled_correct": 0.46875,
          "digit_accuracy_by_position": [
            0.98779296875,
            0.70361328125,
            0.71484375
          ],
          "overlap_digit_accuracy": 0.709228515625,
          "source_A_all_correct": 0.51171875,
          "source_B_all_correct": 0.51171875,
          "pair_set_accuracy_by_position": [
            0.9814453125,
            0.9267578125,
            0.9296875
          ],
          "overlap_pair_set_accuracy": 0.92822265625,
          "source_swap_rate_given_pair_recovered": 0.19618320610687023,
          "loss": 0.7484507039189339
        }
      },
      "high_overlap": {
        "examples": 191,
        "digit_accuracy": 0.7931937172774869,
        "all_labeled_correct": 0.4363001745200698
      },
      "trainable_parameters": 1262730,
      "inference_parameters": 1262730,
      "zero_accuracy": 0.09711371527777779,
      "wrong_context_accuracy": 0.10492621527777778
    },
    {
      "encoder": "qwen",
      "kind": "mix_post",
      "mode": "B1",
      "budget": 16,
      "group": "main",
      "native_frames": 49,
      "native_dimension": 2048,
      "metrics_mean": {
        "digit_accuracy": 0.9776475694444445,
        "all_labeled_correct": 0.9010416666666666,
        "overlap_digit_accuracy": 0.9700520833333334,
        "source_A_all_correct": 0.9401041666666666,
        "source_B_all_correct": 0.9368489583333334,
        "overlap_pair_set_accuracy": 0.9640299479166666,
        "source_swap_rate_given_pair_recovered": 0.009416175464469743
      },
      "metrics_seed_sd": {
        "digit_accuracy": 0.001143191596446714,
        "all_labeled_correct": 0.005722134059650698,
        "overlap_digit_accuracy": 0.0018646548237938802,
        "source_A_all_correct": 0.0031392092320940606,
        "source_B_all_correct": 0.004403564211741108,
        "overlap_pair_set_accuracy": 0.001973365177894229,
        "source_swap_rate_given_pair_recovered": 0.001130715609632357
      },
      "per_seed": {
        "0": {
          "digit_accuracy": 0.9765625,
          "all_labeled_correct": 0.89453125,
          "digit_accuracy_by_position": [
            0.99365234375,
            0.96484375,
            0.97119140625
          ],
          "overlap_digit_accuracy": 0.968017578125,
          "source_A_all_correct": 0.9365234375,
          "source_B_all_correct": 0.9326171875,
          "pair_set_accuracy_by_position": [
            0.9873046875,
            0.955078125,
            0.96875
          ],
          "overlap_pair_set_accuracy": 0.9619140625,
          "source_swap_rate_given_pair_recovered": 0.009694258016405667,
          "loss": 0.12545807426795363
        },
        "1": {
          "digit_accuracy": 0.9788411458333334,
          "all_labeled_correct": 0.9033203125,
          "digit_accuracy_by_position": [
            0.9931640625,
            0.97265625,
            0.970703125
          ],
          "overlap_digit_accuracy": 0.9716796875,
          "source_A_all_correct": 0.94140625,
          "source_B_all_correct": 0.94140625,
          "pair_set_accuracy_by_position": [
            0.98828125,
            0.96484375,
            0.9638671875
          ],
          "overlap_pair_set_accuracy": 0.96435546875,
          "source_swap_rate_given_pair_recovered": 0.008172362555720654,
          "loss": 0.10410566255450249
        },
        "2": {
          "digit_accuracy": 0.9775390625,
          "all_labeled_correct": 0.9052734375,
          "digit_accuracy_by_position": [
            0.99169921875,
            0.97314453125,
            0.9677734375
          ],
          "overlap_digit_accuracy": 0.970458984375,
          "source_A_all_correct": 0.9423828125,
          "source_B_all_correct": 0.9365234375,
          "pair_set_accuracy_by_position": [
            0.990234375,
            0.966796875,
            0.96484375
          ],
          "overlap_pair_set_accuracy": 0.9658203125,
          "source_swap_rate_given_pair_recovered": 0.010381905821282907,
          "loss": 0.13871847512200475
        }
      },
      "high_overlap": {
        "examples": 191,
        "digit_accuracy": 0.9653868528214078,
        "all_labeled_correct": 0.8237347294938918
      },
      "trainable_parameters": 1860372,
      "inference_parameters": 1262730,
      "zero_accuracy": 0.09760199652777779,
      "wrong_context_accuracy": 0.10297309027777778
    },
    {
      "encoder": "qwen",
      "kind": "mix_post",
      "mode": "B2",
      "budget": 16,
      "group": "main",
      "native_frames": 49,
      "native_dimension": 2048,
      "metrics_mean": {
        "digit_accuracy": 0.9787326388888888,
        "all_labeled_correct": 0.9039713541666666,
        "overlap_digit_accuracy": 0.9707845052083334,
        "source_A_all_correct": 0.9365234375,
        "source_B_all_correct": 0.9449869791666666,
        "overlap_pair_set_accuracy": 0.9625651041666666,
        "source_swap_rate_given_pair_recovered": 0.007818563265435402
      },
      "metrics_seed_sd": {
        "digit_accuracy": 0.002149012838578341,
        "all_labeled_correct": 0.004510548978043951,
        "overlap_digit_accuracy": 0.003072035496122538,
        "source_A_all_correct": 0.004256737249551439,
        "source_B_all_correct": 0.00406575390520729,
        "overlap_pair_set_accuracy": 0.0017147873946700423,
        "source_swap_rate_given_pair_recovered": 0.002265434425032896
      },
      "per_seed": {
        "0": {
          "digit_accuracy": 0.9791666666666666,
          "all_labeled_correct": 0.9013671875,
          "digit_accuracy_by_position": [
            0.9951171875,
            0.97216796875,
            0.97021484375
          ],
          "overlap_digit_accuracy": 0.97119140625,
          "source_A_all_correct": 0.9345703125,
          "source_B_all_correct": 0.9462890625,
          "pair_set_accuracy_by_position": [
            0.990234375,
            0.95703125,
            0.96484375
          ],
          "overlap_pair_set_accuracy": 0.9609375,
          "source_swap_rate_given_pair_recovered": 0.006713912719134651,
          "loss": 0.12693924159975722
        },
        "1": {
          "digit_accuracy": 0.9763997395833334,
          "all_labeled_correct": 0.9013671875,
          "digit_accuracy_by_position": [
            0.994140625,
            0.96533203125,
            0.9697265625
          ],
          "overlap_digit_accuracy": 0.967529296875,
          "source_A_all_correct": 0.93359375,
          "source_B_all_correct": 0.9404296875,
          "pair_set_accuracy_by_position": [
            0.990234375,
            0.958984375,
            0.9658203125
          ],
          "overlap_pair_set_accuracy": 0.96240234375,
          "source_swap_rate_given_pair_recovered": 0.010424422933730455,
          "loss": 0.13508922909386456
        },
        "2": {
          "digit_accuracy": 0.9806315104166666,
          "all_labeled_correct": 0.9091796875,
          "digit_accuracy_by_position": [
            0.99462890625,
            0.97705078125,
            0.97021484375
          ],
          "overlap_digit_accuracy": 0.9736328125,
          "source_A_all_correct": 0.94140625,
          "source_B_all_correct": 0.9482421875,
          "pair_set_accuracy_by_position": [
            0.9912109375,
            0.962890625,
            0.9658203125
          ],
          "overlap_pair_set_accuracy": 0.96435546875,
          "source_swap_rate_given_pair_recovered": 0.0063173541434411,
          "loss": 0.13050463725812733
        }
      },
      "high_overlap": {
        "examples": 191,
        "digit_accuracy": 0.9618964514252472,
        "all_labeled_correct": 0.8150087260034904
      },
      "trainable_parameters": 1860628,
      "inference_parameters": 1329546,
      "zero_accuracy": 0.1005859375,
      "wrong_context_accuracy": 0.10259331597222222
    },
    {
      "encoder": "qwen",
      "kind": "mix_post",
      "mode": "B0",
      "budget": 8,
      "group": "main",
      "native_frames": 49,
      "native_dimension": 2048,
      "metrics_mean": {
        "digit_accuracy": 0.8009982638888888,
        "all_labeled_correct": 0.4518229166666667,
        "overlap_digit_accuracy": 0.7083333333333334,
        "source_A_all_correct": 0.51171875,
        "source_B_all_correct": 0.4996744791666667,
        "overlap_pair_set_accuracy": 0.9124348958333334,
        "source_swap_rate_given_pair_recovered": 0.19430497941230362
      },
      "metrics_seed_sd": {
        "digit_accuracy": 0.004546622245126619,
        "all_labeled_correct": 0.014095465556387347,
        "overlap_digit_accuracy": 0.005701262984419594,
        "source_A_all_correct": 0.011840191067365372,
        "source_B_all_correct": 0.008131507810414582,
        "overlap_pair_set_accuracy": 0.013068556748792854,
        "source_swap_rate_given_pair_recovered": 0.0035940203671623087
      },
      "per_seed": {
        "0": {
          "digit_accuracy": 0.7960611979166666,
          "all_labeled_correct": 0.435546875,
          "digit_accuracy_by_position": [
            0.98388671875,
            0.6923828125,
            0.7119140625
          ],
          "overlap_digit_accuracy": 0.7021484375,
          "source_A_all_correct": 0.5009765625,
          "source_B_all_correct": 0.4970703125,
          "pair_set_accuracy_by_position": [
            0.9814453125,
            0.896484375,
            0.8994140625
          ],
          "overlap_pair_set_accuracy": 0.89794921875,
          "source_swap_rate_given_pair_recovered": 0.1959406713505074,
          "loss": 0.5850573945790529
        },
        "1": {
          "digit_accuracy": 0.8019205729166666,
          "all_labeled_correct": 0.4599609375,
          "digit_accuracy_by_position": [
            0.98681640625,
            0.70361328125,
            0.71533203125
          ],
          "overlap_digit_accuracy": 0.70947265625,
          "source_A_all_correct": 0.5244140625,
          "source_B_all_correct": 0.4931640625,
          "pair_set_accuracy_by_position": [
            0.9892578125,
            0.9072265625,
            0.939453125
          ],
          "overlap_pair_set_accuracy": 0.92333984375,
          "source_swap_rate_given_pair_recovered": 0.19679021780664885,
          "loss": 0.7926463969051838
        },
        "2": {
          "digit_accuracy": 0.8050130208333334,
          "all_labeled_correct": 0.4599609375,
          "digit_accuracy_by_position": [
            0.98828125,
            0.70556640625,
            0.72119140625
          ],
          "overlap_digit_accuracy": 0.71337890625,
          "source_A_all_correct": 0.509765625,
          "source_B_all_correct": 0.5087890625,
          "pair_set_accuracy_by_position": [
            0.9873046875,
            0.9091796875,
            0.9228515625
          ],
          "overlap_pair_set_accuracy": 0.916015625,
          "source_swap_rate_given_pair_recovered": 0.1901840490797546,
          "loss": 0.7943711504340172
        }
      },
      "high_overlap": {
        "examples": 191,
        "digit_accuracy": 0.7867946480511926,
        "all_labeled_correct": 0.40488656195462475
      },
      "trainable_parameters": 1261706,
      "inference_parameters": 1261706,
      "zero_accuracy": 0.10107421875,
      "wrong_context_accuracy": 0.10405815972222221
    },
    {
      "encoder": "qwen",
      "kind": "mix_post",
      "mode": "B1",
      "budget": 8,
      "group": "main",
      "native_frames": 49,
      "native_dimension": 2048,
      "metrics_mean": {
        "digit_accuracy": 0.9267578125,
        "all_labeled_correct": 0.7770182291666666,
        "overlap_digit_accuracy": 0.893798828125,
        "source_A_all_correct": 0.814453125,
        "source_B_all_correct": 0.8203125,
        "overlap_pair_set_accuracy": 0.9521484375,
        "source_swap_rate_given_pair_recovered": 0.06287838998886934
      },
      "metrics_seed_sd": {
        "digit_accuracy": 0.07627214315221091,
        "all_labeled_correct": 0.17826300734704176,
        "overlap_digit_accuracy": 0.11462759839090328,
        "source_A_all_correct": 0.18037878659319126,
        "source_B_all_correct": 0.18099631610303868,
        "overlap_pair_set_accuracy": 0.009417627696282183,
        "source_swap_rate_given_pair_recovered": 0.08468085455494159
      },
      "per_seed": {
        "0": {
          "digit_accuracy": 0.9723307291666666,
          "all_labeled_correct": 0.8857421875,
          "digit_accuracy_by_position": [
            0.99169921875,
            0.96337890625,
            0.9619140625
          ],
          "overlap_digit_accuracy": 0.962646484375,
          "source_A_all_correct": 0.927734375,
          "source_B_all_correct": 0.9267578125,
          "pair_set_accuracy_by_position": [
            0.9873046875,
            0.9541015625,
            0.9580078125
          ],
          "overlap_pair_set_accuracy": 0.9560546875,
          "source_swap_rate_given_pair_recovered": 0.011597456041900486,
          "loss": 0.14106164779514074
        },
        "1": {
          "digit_accuracy": 0.96923828125,
          "all_labeled_correct": 0.8740234375,
          "digit_accuracy_by_position": [
            0.9931640625,
            0.95751953125,
            0.95703125
          ],
          "overlap_digit_accuracy": 0.957275390625,
          "source_A_all_correct": 0.9091796875,
          "source_B_all_correct": 0.9228515625,
          "pair_set_accuracy_by_position": [
            0.986328125,
            0.958984375,
            0.958984375
          ],
          "overlap_pair_set_accuracy": 0.958984375,
          "source_swap_rate_given_pair_recovered": 0.016417910447761194,
          "loss": 0.17235759762115777
        },
        "2": {
          "digit_accuracy": 0.8387044270833334,
          "all_labeled_correct": 0.5712890625,
          "digit_accuracy_by_position": [
            0.9931640625,
            0.76025390625,
            0.7626953125
          ],
          "overlap_digit_accuracy": 0.761474609375,
          "source_A_all_correct": 0.6064453125,
          "source_B_all_correct": 0.611328125,
          "pair_set_accuracy_by_position": [
            0.98828125,
            0.9365234375,
            0.9462890625
          ],
          "overlap_pair_set_accuracy": 0.94140625,
          "source_swap_rate_given_pair_recovered": 0.16061980347694632,
          "loss": 0.9475649371743202
        }
      },
      "high_overlap": {
        "examples": 191,
        "digit_accuracy": 0.911867364746946,
        "all_labeled_correct": 0.6998254799301921
      },
      "trainable_parameters": 1859348,
      "inference_parameters": 1261706,
      "zero_accuracy": 0.09619140625,
      "wrong_context_accuracy": 0.10291883680555557
    },
    {
      "encoder": "qwen",
      "kind": "mix_post",
      "mode": "B2",
      "budget": 8,
      "group": "main",
      "native_frames": 49,
      "native_dimension": 2048,
      "metrics_mean": {
        "digit_accuracy": 0.9756944444444445,
        "all_labeled_correct": 0.8932291666666666,
        "overlap_digit_accuracy": 0.9666341145833334,
        "source_A_all_correct": 0.9267578125,
        "source_B_all_correct": 0.939453125,
        "overlap_pair_set_accuracy": 0.9596354166666666,
        "source_swap_rate_given_pair_recovered": 0.010084415789161848
      },
      "metrics_seed_sd": {
        "digit_accuracy": 0.00728311188237731,
        "all_labeled_correct": 0.024942204107409535,
        "overlap_digit_accuracy": 0.010856254001075712,
        "source_A_all_correct": 0.022839874147512696,
        "source_B_all_correct": 0.01631180965672858,
        "overlap_pair_set_accuracy": 0.007725549665563684,
        "source_swap_rate_given_pair_recovered": 0.006048579971471075
      },
      "per_seed": {
        "0": {
          "digit_accuracy": 0.96728515625,
          "all_labeled_correct": 0.865234375,
          "digit_accuracy_by_position": [
            0.99365234375,
            0.955078125,
            0.953125
          ],
          "overlap_digit_accuracy": 0.9541015625,
          "source_A_all_correct": 0.900390625,
          "source_B_all_correct": 0.921875,
          "pair_set_accuracy_by_position": [
            0.9912109375,
            0.9462890625,
            0.9560546875
          ],
          "overlap_pair_set_accuracy": 0.951171875,
          "source_swap_rate_given_pair_recovered": 0.016860247283626825,
          "loss": 0.1653004086110741
        },
        "1": {
          "digit_accuracy": 0.97998046875,
          "all_labeled_correct": 0.9130859375,
          "digit_accuracy_by_position": [
            0.99462890625,
            0.97314453125,
            0.97216796875
          ],
          "overlap_digit_accuracy": 0.97265625,
          "source_A_all_correct": 0.939453125,
          "source_B_all_correct": 0.9541015625,
          "pair_set_accuracy_by_position": [
            0.9912109375,
            0.9638671875,
            0.96875
          ],
          "overlap_pair_set_accuracy": 0.96630859375,
          "source_swap_rate_given_pair_recovered": 0.00816326530612245,
          "loss": 0.12432119715958834
        },
        "2": {
          "digit_accuracy": 0.9798177083333334,
          "all_labeled_correct": 0.9013671875,
          "digit_accuracy_by_position": [
            0.9931640625,
            0.9736328125,
            0.97265625
          ],
          "overlap_digit_accuracy": 0.97314453125,
          "source_A_all_correct": 0.9404296875,
          "source_B_all_correct": 0.9423828125,
          "pair_set_accuracy_by_position": [
            0.9873046875,
            0.958984375,
            0.9638671875
          ],
          "overlap_pair_set_accuracy": 0.96142578125,
          "source_swap_rate_given_pair_recovered": 0.005229734777736272,
          "loss": 0.1198032337706536
        }
      },
      "high_overlap": {
        "examples": 191,
        "digit_accuracy": 0.9616055846422339,
        "all_labeled_correct": 0.8202443280977313
      },
      "trainable_parameters": 1859604,
      "inference_parameters": 1328522,
      "zero_accuracy": 0.09749348958333333,
      "wrong_context_accuracy": 0.10394965277777779
    },
    {
      "encoder": "qwen",
      "kind": "mix_post",
      "mode": "B0",
      "budget": 4,
      "group": "main",
      "native_frames": 49,
      "native_dimension": 2048,
      "metrics_mean": {
        "digit_accuracy": 0.7186957465277778,
        "all_labeled_correct": 0.11588541666666667,
        "overlap_digit_accuracy": 0.5831705729166666,
        "source_A_all_correct": 0.3567708333333333,
        "source_B_all_correct": 0.3284505208333333,
        "overlap_pair_set_accuracy": 0.453125,
        "source_swap_rate_given_pair_recovered": 0.1526083164809797
      },
      "metrics_seed_sd": {
        "digit_accuracy": 0.030432426051190033,
        "all_labeled_correct": 0.09427917331173971,
        "overlap_digit_accuracy": 0.04360855489205946,
        "source_A_all_correct": 0.042638259093320335,
        "source_B_all_correct": 0.06153377062696235,
        "overlap_pair_set_accuracy": 0.2732661118848495,
        "source_swap_rate_given_pair_recovered": 0.08447733389136534
      },
      "per_seed": {
        "0": {
          "digit_accuracy": 0.7434895833333334,
          "all_labeled_correct": 0.201171875,
          "digit_accuracy_by_position": [
            0.9921875,
            0.67236328125,
            0.56591796875
          ],
          "overlap_digit_accuracy": 0.619140625,
          "source_A_all_correct": 0.37890625,
          "source_B_all_correct": 0.390625,
          "pair_set_accuracy_by_position": [
            0.9873046875,
            0.8525390625,
            0.4921875
          ],
          "overlap_pair_set_accuracy": 0.67236328125,
          "source_swap_rate_given_pair_recovered": 0.20867079561696045,
          "loss": 0.5919180251657963
        },
        "1": {
          "digit_accuracy": 0.7278645833333334,
          "all_labeled_correct": 0.1318359375,
          "digit_accuracy_by_position": [
            0.9921875,
            0.634765625,
            0.556640625
          ],
          "overlap_digit_accuracy": 0.595703125,
          "source_A_all_correct": 0.3837890625,
          "source_B_all_correct": 0.3271484375,
          "pair_set_accuracy_by_position": [
            0.984375,
            0.693359375,
            0.38671875
          ],
          "overlap_pair_set_accuracy": 0.5400390625,
          "source_swap_rate_given_pair_recovered": 0.19370860927152317,
          "loss": 0.571997806429863
        },
        "2": {
          "digit_accuracy": 0.6847330729166666,
          "all_labeled_correct": 0.0146484375,
          "digit_accuracy_by_position": [
            0.98486328125,
            0.52880859375,
            0.54052734375
          ],
          "overlap_digit_accuracy": 0.53466796875,
          "source_A_all_correct": 0.3076171875,
          "source_B_all_correct": 0.267578125,
          "pair_set_accuracy_by_position": [
            0.9765625,
            0.15625,
            0.1376953125
          ],
          "overlap_pair_set_accuracy": 0.14697265625,
          "source_swap_rate_given_pair_recovered": 0.055445544554455446,
          "loss": 0.6195595897734165
        }
      },
      "high_overlap": {
        "examples": 191,
        "digit_accuracy": 0.7149505526468878,
        "all_labeled_correct": 0.08551483420593368
      },
      "trainable_parameters": 1261194,
      "inference_parameters": 1261194,
      "zero_accuracy": 0.10053168402777778,
      "wrong_context_accuracy": 0.10476345486111112
    },
    {
      "encoder": "qwen",
      "kind": "mix_post",
      "mode": "B1",
      "budget": 4,
      "group": "main",
      "native_frames": 49,
      "native_dimension": 2048,
      "metrics_mean": {
        "digit_accuracy": 0.9109700520833334,
        "all_labeled_correct": 0.6884765625,
        "overlap_digit_accuracy": 0.8715006510416666,
        "source_A_all_correct": 0.7649739583333334,
        "source_B_all_correct": 0.779296875,
        "overlap_pair_set_accuracy": 0.888671875,
        "source_swap_rate_given_pair_recovered": 0.06485287252601651
      },
      "metrics_seed_sd": {
        "digit_accuracy": 0.1063296499461403,
        "all_labeled_correct": 0.34688594216623797,
        "overlap_digit_accuracy": 0.1577372028260465,
        "source_A_all_correct": 0.2803267407210982,
        "source_B_all_correct": 0.2563118464571572,
        "overlap_pair_set_accuracy": 0.12477377447505918,
        "source_swap_rate_given_pair_recovered": 0.0884722295187401
      },
      "per_seed": {
        "0": {
          "digit_accuracy": 0.9755859375,
          "all_labeled_correct": 0.8984375,
          "digit_accuracy_by_position": [
            0.99169921875,
            0.96484375,
            0.97021484375
          ],
          "overlap_digit_accuracy": 0.967529296875,
          "source_A_all_correct": 0.9345703125,
          "source_B_all_correct": 0.9326171875,
          "pair_set_accuracy_by_position": [
            0.98828125,
            0.9609375,
            0.9658203125
          ],
          "overlap_pair_set_accuracy": 0.96337890625,
          "source_swap_rate_given_pair_recovered": 0.011144130757800892,
          "loss": 0.1302062668837607
        },
        "1": {
          "digit_accuracy": 0.7882486979166666,
          "all_labeled_correct": 0.2880859375,
          "digit_accuracy_by_position": [
            0.98583984375,
            0.6142578125,
            0.7646484375
          ],
          "overlap_digit_accuracy": 0.689453125,
          "source_A_all_correct": 0.44140625,
          "source_B_all_correct": 0.4833984375,
          "pair_set_accuracy_by_position": [
            0.9775390625,
            0.5576171875,
            0.931640625
          ],
          "overlap_pair_set_accuracy": 0.74462890625,
          "source_swap_rate_given_pair_recovered": 0.16696588868940754,
          "loss": 0.7398041374981403
        },
        "2": {
          "digit_accuracy": 0.9690755208333334,
          "all_labeled_correct": 0.87890625,
          "digit_accuracy_by_position": [
            0.9921875,
            0.95703125,
            0.9580078125
          ],
          "overlap_digit_accuracy": 0.95751953125,
          "source_A_all_correct": 0.9189453125,
          "source_B_all_correct": 0.921875,
          "pair_set_accuracy_by_position": [
            0.986328125,
            0.951171875,
            0.96484375
          ],
          "overlap_pair_set_accuracy": 0.9580078125,
          "source_swap_rate_given_pair_recovered": 0.01644859813084112,
          "loss": 0.1549169053323567
        }
      },
      "high_overlap": {
        "examples": 191,
        "digit_accuracy": 0.9008144269924374,
        "all_labeled_correct": 0.6282722513089006
      },
      "trainable_parameters": 1858836,
      "inference_parameters": 1261194,
      "zero_accuracy": 0.10487196180555557,
      "wrong_context_accuracy": 0.10367838541666667
    },
    {
      "encoder": "qwen",
      "kind": "mix_post",
      "mode": "B2",
      "budget": 4,
      "group": "main",
      "native_frames": 49,
      "native_dimension": 2048,
      "metrics_mean": {
        "digit_accuracy": 0.9721137152777778,
        "all_labeled_correct": 0.8854166666666666,
        "overlap_digit_accuracy": 0.96142578125,
        "source_A_all_correct": 0.9208984375,
        "source_B_all_correct": 0.9283854166666666,
        "overlap_pair_set_accuracy": 0.9597981770833334,
        "source_swap_rate_given_pair_recovered": 0.014159992040098997
      },
      "metrics_seed_sd": {
        "digit_accuracy": 0.005801063775231074,
        "all_labeled_correct": 0.012745294238575452,
        "overlap_digit_accuracy": 0.00856582265275822,
        "source_A_all_correct": 0.01760523083722651,
        "source_B_all_correct": 0.010801210952498086,
        "overlap_pair_set_accuracy": 0.0012288141984490154,
        "source_swap_rate_given_pair_recovered": 0.006937332507600988
      },
      "per_seed": {
        "0": {
          "digit_accuracy": 0.9768880208333334,
          "all_labeled_correct": 0.8955078125,
          "digit_accuracy_by_position": [
            0.99365234375,
            0.96728515625,
            0.9697265625
          ],
          "overlap_digit_accuracy": 0.968505859375,
          "source_A_all_correct": 0.935546875,
          "source_B_all_correct": 0.9384765625,
          "pair_set_accuracy_by_position": [
            0.9892578125,
            0.9580078125,
            0.958984375
          ],
          "overlap_pair_set_accuracy": 0.95849609375,
          "source_swap_rate_given_pair_recovered": 0.007844602166604408,
          "loss": 0.14154495997354388
        },
        "1": {
          "digit_accuracy": 0.9656575520833334,
          "all_labeled_correct": 0.87109375,
          "digit_accuracy_by_position": [
            0.9931640625,
            0.9541015625,
            0.94970703125
          ],
          "overlap_digit_accuracy": 0.951904296875,
          "source_A_all_correct": 0.9013671875,
          "source_B_all_correct": 0.9169921875,
          "pair_set_accuracy_by_position": [
            0.990234375,
            0.9619140625,
            0.9580078125
          ],
          "overlap_pair_set_accuracy": 0.9599609375,
          "source_swap_rate_given_pair_recovered": 0.021585411239300335,
          "loss": 0.21747636003419757
        },
        "2": {
          "digit_accuracy": 0.9737955729166666,
          "all_labeled_correct": 0.8896484375,
          "digit_accuracy_by_position": [
            0.99365234375,
            0.96533203125,
            0.96240234375
          ],
          "overlap_digit_accuracy": 0.9638671875,
          "source_A_all_correct": 0.92578125,
          "source_B_all_correct": 0.9296875,
          "pair_set_accuracy_by_position": [
            0.9912109375,
            0.9619140625,
            0.9599609375
          ],
          "overlap_pair_set_accuracy": 0.9609375,
          "source_swap_rate_given_pair_recovered": 0.013049962714392245,
          "loss": 0.1597507749684155
        }
      },
      "high_overlap": {
        "examples": 191,
        "digit_accuracy": 0.9581151832460733,
        "all_labeled_correct": 0.8080279232111692
      },
      "trainable_parameters": 1859092,
      "inference_parameters": 1328010,
      "zero_accuracy": 0.09982638888888888,
      "wrong_context_accuracy": 0.10346137152777778
    },
    {
      "encoder": "wavlm",
      "kind": "mix_post",
      "mode": "B0",
      "budget": 16,
      "group": "main",
      "native_frames": 189,
      "native_dimension": 768,
      "metrics_mean": {
        "digit_accuracy": 0.6818033854166666,
        "all_labeled_correct": 0.020833333333333332,
        "overlap_digit_accuracy": 0.54150390625,
        "source_A_all_correct": 0.3352864583333333,
        "source_B_all_correct": 0.2783203125,
        "overlap_pair_set_accuracy": 0.1904296875,
        "source_swap_rate_given_pair_recovered": 0.08128730740336895
      },
      "metrics_seed_sd": {
        "digit_accuracy": 0.0011736820558151109,
        "all_labeled_correct": 0.009230108645024625,
        "overlap_digit_accuracy": 0.004235681536351922,
        "source_A_all_correct": 0.010712553822854383,
        "source_B_all_correct": 0.007627196949127592,
        "overlap_pair_set_accuracy": 0.05007918762888767,
        "source_swap_rate_given_pair_recovered": 0.03927524752406107
      },
      "per_seed": {
        "0": {
          "digit_accuracy": 0.6814778645833334,
          "all_labeled_correct": 0.03125,
          "digit_accuracy_by_position": [
            0.95947265625,
            0.5419921875,
            0.54296875
          ],
          "overlap_digit_accuracy": 0.54248046875,
          "source_A_all_correct": 0.3232421875,
          "source_B_all_correct": 0.283203125,
          "pair_set_accuracy_by_position": [
            0.923828125,
            0.2451171875,
            0.248046875
          ],
          "overlap_pair_set_accuracy": 0.24658203125,
          "source_swap_rate_given_pair_recovered": 0.12478336221837089,
          "loss": 0.7567717209458351
        },
        "1": {
          "digit_accuracy": 0.6808268229166666,
          "all_labeled_correct": 0.017578125,
          "digit_accuracy_by_position": [
            0.96875,
            0.53466796875,
            0.5390625
          ],
          "overlap_digit_accuracy": 0.536865234375,
          "source_A_all_correct": 0.34375,
          "source_B_all_correct": 0.26953125,
          "pair_set_accuracy_by_position": [
            0.9384765625,
            0.1875,
            0.1611328125
          ],
          "overlap_pair_set_accuracy": 0.17431640625,
          "source_swap_rate_given_pair_recovered": 0.07065750736015702,
          "loss": 0.8437011986970901
        },
        "2": {
          "digit_accuracy": 0.68310546875,
          "all_labeled_correct": 0.013671875,
          "digit_accuracy_by_position": [
            0.958984375,
            0.54248046875,
            0.5478515625
          ],
          "overlap_digit_accuracy": 0.545166015625,
          "source_A_all_correct": 0.3388671875,
          "source_B_all_correct": 0.2822265625,
          "pair_set_accuracy_by_position": [
            0.9189453125,
            0.16015625,
            0.140625
          ],
          "overlap_pair_set_accuracy": 0.150390625,
          "source_swap_rate_given_pair_recovered": 0.04842105263157895,
          "loss": 0.7353718392550945
        }
      },
      "high_overlap": {
        "examples": 191,
        "digit_accuracy": 0.680628272251309,
        "all_labeled_correct": 0.02617801047120419
      },
      "trainable_parameters": 1096330,
      "inference_parameters": 1096330,
      "zero_accuracy": 0.10004340277777778,
      "wrong_context_accuracy": 0.10394965277777778
    },
    {
      "encoder": "wavlm",
      "kind": "mix_post",
      "mode": "B1",
      "budget": 16,
      "group": "main",
      "native_frames": 189,
      "native_dimension": 768,
      "metrics_mean": {
        "digit_accuracy": 0.6893446180555557,
        "all_labeled_correct": 0.1201171875,
        "overlap_digit_accuracy": 0.5537923177083334,
        "source_A_all_correct": 0.3678385416666667,
        "source_B_all_correct": 0.2581380208333333,
        "overlap_pair_set_accuracy": 0.4931640625,
        "source_swap_rate_given_pair_recovered": 0.16972340489058355
      },
      "metrics_seed_sd": {
        "digit_accuracy": 0.012645482356762541,
        "all_labeled_correct": 0.09474166277839768,
        "overlap_digit_accuracy": 0.018328983773494557,
        "source_A_all_correct": 0.022017821058705537,
        "source_B_all_correct": 0.014027644157822424,
        "overlap_pair_set_accuracy": 0.3142221680715617,
        "source_swap_rate_given_pair_recovered": 0.12611055536888227
      },
      "per_seed": {
        "0": {
          "digit_accuracy": 0.6824544270833334,
          "all_labeled_correct": 0.1728515625,
          "digit_accuracy_by_position": [
            0.955078125,
            0.5380859375,
            0.55419921875
          ],
          "overlap_digit_accuracy": 0.546142578125,
          "source_A_all_correct": 0.3662109375,
          "source_B_all_correct": 0.2421875,
          "pair_set_accuracy_by_position": [
            0.912109375,
            0.64453125,
            0.7138671875
          ],
          "overlap_pair_set_accuracy": 0.67919921875,
          "source_swap_rate_given_pair_recovered": 0.25585844093735055,
          "loss": 1.5540227741003036
        },
        "1": {
          "digit_accuracy": 0.681640625,
          "all_labeled_correct": 0.0107421875,
          "digit_accuracy_by_position": [
            0.9638671875,
            0.53759765625,
            0.54345703125
          ],
          "overlap_digit_accuracy": 0.54052734375,
          "source_A_all_correct": 0.3466796875,
          "source_B_all_correct": 0.2685546875,
          "pair_set_accuracy_by_position": [
            0.9287109375,
            0.138671875,
            0.1220703125
          ],
          "overlap_pair_set_accuracy": 0.13037109375,
          "source_swap_rate_given_pair_recovered": 0.0249728555917481,
          "loss": 0.8088474422693253
        },
        "2": {
          "digit_accuracy": 0.7039388020833334,
          "all_labeled_correct": 0.1767578125,
          "digit_accuracy_by_position": [
            0.96240234375,
            0.576171875,
            0.5732421875
          ],
          "overlap_digit_accuracy": 0.57470703125,
          "source_A_all_correct": 0.390625,
          "source_B_all_correct": 0.263671875,
          "pair_set_accuracy_by_position": [
            0.9248046875,
            0.6552734375,
            0.6845703125
          ],
          "overlap_pair_set_accuracy": 0.669921875,
          "source_swap_rate_given_pair_recovered": 0.22833891814265198,
          "loss": 1.4699388146400452
        }
      },
      "high_overlap": {
        "examples": 191,
        "digit_accuracy": 0.6631762652705061,
        "all_labeled_correct": 0.075043630017452
      },
      "trainable_parameters": 1693972,
      "inference_parameters": 1096330,
      "zero_accuracy": 0.10145399305555554,
      "wrong_context_accuracy": 0.10335286458333333
    },
    {
      "encoder": "wavlm",
      "kind": "mix_post",
      "mode": "B2",
      "budget": 16,
      "group": "main",
      "native_frames": 189,
      "native_dimension": 768,
      "metrics_mean": {
        "digit_accuracy": 0.7188585069444445,
        "all_labeled_correct": 0.2255859375,
        "overlap_digit_accuracy": 0.5960286458333334,
        "source_A_all_correct": 0.4078776041666667,
        "source_B_all_correct": 0.3304036458333333,
        "overlap_pair_set_accuracy": 0.6904296875,
        "source_swap_rate_given_pair_recovered": 0.21150616901033112
      },
      "metrics_seed_sd": {
        "digit_accuracy": 0.020109530860445927,
        "all_labeled_correct": 0.019506820659607595,
        "overlap_digit_accuracy": 0.030094066540303426,
        "source_A_all_correct": 0.06408462762538389,
        "source_B_all_correct": 0.023626624103677153,
        "overlap_pair_set_accuracy": 0.00896365222201456,
        "source_swap_rate_given_pair_recovered": 0.024807236243882824
      },
      "per_seed": {
        "0": {
          "digit_accuracy": 0.6956380208333334,
          "all_labeled_correct": 0.203125,
          "digit_accuracy_by_position": [
            0.96435546875,
            0.55224609375,
            0.5703125
          ],
          "overlap_digit_accuracy": 0.561279296875,
          "source_A_all_correct": 0.333984375,
          "source_B_all_correct": 0.3037109375,
          "pair_set_accuracy_by_position": [
            0.9296875,
            0.65625,
            0.7373046875
          ],
          "overlap_pair_set_accuracy": 0.69677734375,
          "source_swap_rate_given_pair_recovered": 0.23964634713820382,
          "loss": 1.8260291516780853
        },
        "1": {
          "digit_accuracy": 0.73046875,
          "all_labeled_correct": 0.2353515625,
          "digit_accuracy_by_position": [
            0.96484375,
            0.6171875,
            0.609375
          ],
          "overlap_digit_accuracy": 0.61328125,
          "source_A_all_correct": 0.4482421875,
          "source_B_all_correct": 0.3388671875,
          "pair_set_accuracy_by_position": [
            0.9326171875,
            0.6591796875,
            0.701171875
          ],
          "overlap_pair_set_accuracy": 0.68017578125,
          "source_swap_rate_given_pair_recovered": 0.19279962103268594,
          "loss": 1.477905347943306
        },
        "2": {
          "digit_accuracy": 0.73046875,
          "all_labeled_correct": 0.23828125,
          "digit_accuracy_by_position": [
            0.96435546875,
            0.6171875,
            0.60986328125
          ],
          "overlap_digit_accuracy": 0.613525390625,
          "source_A_all_correct": 0.44140625,
          "source_B_all_correct": 0.3486328125,
          "pair_set_accuracy_by_position": [
            0.931640625,
            0.6767578125,
            0.7119140625
          ],
          "overlap_pair_set_accuracy": 0.6943359375,
          "source_swap_rate_given_pair_recovered": 0.20207253886010362,
          "loss": 1.6823393404483795
        }
      },
      "high_overlap": {
        "examples": 191,
        "digit_accuracy": 0.6870273414776032,
        "all_labeled_correct": 0.13612565445026178
      },
      "trainable_parameters": 1694228,
      "inference_parameters": 1163146,
      "zero_accuracy": 0.1032986111111111,
      "wrong_context_accuracy": 0.10715060763888888
    },
    {
      "encoder": "wavlm",
      "kind": "mix_post",
      "mode": "B0",
      "budget": 8,
      "group": "main",
      "native_frames": 189,
      "native_dimension": 768,
      "metrics_mean": {
        "digit_accuracy": 0.6799045138888888,
        "all_labeled_correct": 0.0244140625,
        "overlap_digit_accuracy": 0.5384928385416666,
        "source_A_all_correct": 0.3414713541666667,
        "source_B_all_correct": 0.2669270833333333,
        "overlap_pair_set_accuracy": 0.22981770833333334,
        "source_swap_rate_given_pair_recovered": 0.10836590249271737
      },
      "metrics_seed_sd": {
        "digit_accuracy": 0.002149012838578341,
        "all_labeled_correct": 0.01613546058775225,
        "overlap_digit_accuracy": 0.0036566800030372673,
        "source_A_all_correct": 0.001127637244510988,
        "source_B_all_correct": 0.004065753905207291,
        "overlap_pair_set_accuracy": 0.07143662044042638,
        "source_swap_rate_given_pair_recovered": 0.051795640810024364
      },
      "per_seed": {
        "0": {
          "digit_accuracy": 0.6775716145833334,
          "all_labeled_correct": 0.0166015625,
          "digit_accuracy_by_position": [
            0.9638671875,
            0.5263671875,
            0.54248046875
          ],
          "overlap_digit_accuracy": 0.534423828125,
          "source_A_all_correct": 0.3408203125,
          "source_B_all_correct": 0.263671875,
          "pair_set_accuracy_by_position": [
            0.93359375,
            0.240234375,
            0.1796875
          ],
          "overlap_pair_set_accuracy": 0.2099609375,
          "source_swap_rate_given_pair_recovered": 0.10228310502283106,
          "loss": 0.8528418615460396
        },
        "1": {
          "digit_accuracy": 0.6818033854166666,
          "all_labeled_correct": 0.013671875,
          "digit_accuracy_by_position": [
            0.96240234375,
            0.53271484375,
            0.55029296875
          ],
          "overlap_digit_accuracy": 0.54150390625,
          "source_A_all_correct": 0.3427734375,
          "source_B_all_correct": 0.271484375,
          "pair_set_accuracy_by_position": [
            0.92578125,
            0.146484375,
            0.1943359375
          ],
          "overlap_pair_set_accuracy": 0.17041015625,
          "source_swap_rate_given_pair_recovered": 0.059880239520958084,
          "loss": 0.8054883554577827
        },
        "2": {
          "digit_accuracy": 0.6803385416666666,
          "all_labeled_correct": 0.04296875,
          "digit_accuracy_by_position": [
            0.9619140625,
            0.5283203125,
            0.55078125
          ],
          "overlap_digit_accuracy": 0.53955078125,
          "source_A_all_correct": 0.3408203125,
          "source_B_all_correct": 0.265625,
          "pair_set_accuracy_by_position": [
            0.92578125,
            0.3134765625,
            0.3046875
          ],
          "overlap_pair_set_accuracy": 0.30908203125,
          "source_swap_rate_given_pair_recovered": 0.16293436293436295,
          "loss": 0.7477701865136623
        }
      },
      "high_overlap": {
        "examples": 191,
        "digit_accuracy": 0.6841186736474695,
        "all_labeled_correct": 0.034904013961605584
      },
      "trainable_parameters": 1095306,
      "inference_parameters": 1095306,
      "zero_accuracy": 0.1013454861111111,
      "wrong_context_accuracy": 0.1047634548611111
    },
    {
      "encoder": "wavlm",
      "kind": "mix_post",
      "mode": "B1",
      "budget": 8,
      "group": "main",
      "native_frames": 189,
      "native_dimension": 768,
      "metrics_mean": {
        "digit_accuracy": 0.6846788194444445,
        "all_labeled_correct": 0.11263020833333333,
        "overlap_digit_accuracy": 0.5457356770833334,
        "source_A_all_correct": 0.3678385416666667,
        "source_B_all_correct": 0.2503255208333333,
        "overlap_pair_set_accuracy": 0.4952799479166667,
        "source_swap_rate_given_pair_recovered": 0.18309766571465236
      },
      "metrics_seed_sd": {
        "digit_accuracy": 0.007301275794240337,
        "all_labeled_correct": 0.0813150781041458,
        "overlap_digit_accuracy": 0.011146118065355275,
        "source_A_all_correct": 0.03149824091122077,
        "source_B_all_correct": 0.021088625438470725,
        "overlap_pair_set_accuracy": 0.2924312832530202,
        "source_swap_rate_given_pair_recovered": 0.11457006737044702
      },
      "per_seed": {
        "0": {
          "digit_accuracy": 0.6930338541666666,
          "all_labeled_correct": 0.177734375,
          "digit_accuracy_by_position": [
            0.9619140625,
            0.56298828125,
            0.55419921875
          ],
          "overlap_digit_accuracy": 0.55859375,
          "source_A_all_correct": 0.4013671875,
          "source_B_all_correct": 0.248046875,
          "pair_set_accuracy_by_position": [
            0.92578125,
            0.6591796875,
            0.703125
          ],
          "overlap_pair_set_accuracy": 0.68115234375,
          "source_swap_rate_given_pair_recovered": 0.24445493157149598,
          "loss": 1.488230049610138
        },
        "1": {
          "digit_accuracy": 0.6814778645833334,
          "all_labeled_correct": 0.021484375,
          "digit_accuracy_by_position": [
            0.96484375,
            0.5361328125,
            0.54345703125
          ],
          "overlap_digit_accuracy": 0.539794921875,
          "source_A_all_correct": 0.3388671875,
          "source_B_all_correct": 0.2724609375,
          "pair_set_accuracy_by_position": [
            0.9296875,
            0.15234375,
            0.1640625
          ],
          "overlap_pair_set_accuracy": 0.158203125,
          "source_swap_rate_given_pair_recovered": 0.05091649694501019,
          "loss": 0.7907431460916996
        },
        "2": {
          "digit_accuracy": 0.6795247395833334,
          "all_labeled_correct": 0.138671875,
          "digit_accuracy_by_position": [
            0.9609375,
            0.533203125,
            0.54443359375
          ],
          "overlap_digit_accuracy": 0.538818359375,
          "source_A_all_correct": 0.36328125,
          "source_B_all_correct": 0.23046875,
          "pair_set_accuracy_by_position": [
            0.923828125,
            0.63671875,
            0.65625
          ],
          "overlap_pair_set_accuracy": 0.646484375,
          "source_swap_rate_given_pair_recovered": 0.25392156862745097,
          "loss": 0.993445135653019
        }
      },
      "high_overlap": {
        "examples": 191,
        "digit_accuracy": 0.6596858638743456,
        "all_labeled_correct": 0.08027923211169284
      },
      "trainable_parameters": 1692948,
      "inference_parameters": 1095306,
      "zero_accuracy": 0.1008029513888889,
      "wrong_context_accuracy": 0.10649956597222221
    },
    {
      "encoder": "wavlm",
      "kind": "mix_post",
      "mode": "B2",
      "budget": 8,
      "group": "main",
      "native_frames": 189,
      "native_dimension": 768,
      "metrics_mean": {
        "digit_accuracy": 0.6963433159722222,
        "all_labeled_correct": 0.08561197916666667,
        "overlap_digit_accuracy": 0.5641276041666666,
        "source_A_all_correct": 0.3697916666666667,
        "source_B_all_correct": 0.2981770833333333,
        "overlap_pair_set_accuracy": 0.3307291666666667,
        "source_swap_rate_given_pair_recovered": 0.10204612696790273
      },
      "metrics_seed_sd": {
        "digit_accuracy": 0.028007248268294475,
        "all_labeled_correct": 0.12122493733940515,
        "overlap_digit_accuracy": 0.03985129889489718,
        "source_A_all_correct": 0.05999570619266007,
        "source_B_all_correct": 0.02834275332166698,
        "overlap_pair_set_accuracy": 0.307783519845856,
        "source_swap_rate_given_pair_recovered": 0.08949535897078002
      },
      "per_seed": {
        "0": {
          "digit_accuracy": 0.6796875,
          "all_labeled_correct": 0.0146484375,
          "digit_accuracy_by_position": [
            0.95361328125,
            0.5400390625,
            0.54541015625
          ],
          "overlap_digit_accuracy": 0.542724609375,
          "source_A_all_correct": 0.3486328125,
          "source_B_all_correct": 0.296875,
          "pair_set_accuracy_by_position": [
            0.91015625,
            0.1552734375,
            0.1162109375
          ],
          "overlap_pair_set_accuracy": 0.1357421875,
          "source_swap_rate_given_pair_recovered": 0.03399122807017544,
          "loss": 0.7744103260338306
        },
        "1": {
          "digit_accuracy": 0.7286783854166666,
          "all_labeled_correct": 0.2255859375,
          "digit_accuracy_by_position": [
            0.9658203125,
            0.5947265625,
            0.62548828125
          ],
          "overlap_digit_accuracy": 0.610107421875,
          "source_A_all_correct": 0.4375,
          "source_B_all_correct": 0.3271484375,
          "pair_set_accuracy_by_position": [
            0.93359375,
            0.6748046875,
            0.6962890625
          ],
          "overlap_pair_set_accuracy": 0.685546875,
          "source_swap_rate_given_pair_recovered": 0.20342205323193915,
          "loss": 1.6048178151249886
        },
        "2": {
          "digit_accuracy": 0.6806640625,
          "all_labeled_correct": 0.0166015625,
          "digit_accuracy_by_position": [
            0.962890625,
            0.54150390625,
            0.53759765625
          ],
          "overlap_digit_accuracy": 0.53955078125,
          "source_A_all_correct": 0.3232421875,
          "source_B_all_correct": 0.2705078125,
          "pair_set_accuracy_by_position": [
            0.927734375,
            0.1806640625,
            0.1611328125
          ],
          "overlap_pair_set_accuracy": 0.1708984375,
          "source_swap_rate_given_pair_recovered": 0.06872509960159362,
          "loss": 0.7706215605139732
        }
      },
      "high_overlap": {
        "examples": 191,
        "digit_accuracy": 0.682082606166376,
        "all_labeled_correct": 0.05759162303664921
      },
      "trainable_parameters": 1693204,
      "inference_parameters": 1162122,
      "zero_accuracy": 0.10042317708333333,
      "wrong_context_accuracy": 0.10481770833333333
    },
    {
      "encoder": "wavlm",
      "kind": "mix_post",
      "mode": "B0",
      "budget": 4,
      "group": "main",
      "native_frames": 189,
      "native_dimension": 768,
      "metrics_mean": {
        "digit_accuracy": 0.6803385416666666,
        "all_labeled_correct": 0.016276041666666668,
        "overlap_digit_accuracy": 0.5398763020833334,
        "source_A_all_correct": 0.3375651041666667,
        "source_B_all_correct": 0.265625,
        "overlap_pair_set_accuracy": 0.169921875,
        "source_swap_rate_given_pair_recovered": 0.061869890090766544
      },
      "metrics_seed_sd": {
        "digit_accuracy": 0.003569614615797745,
        "all_labeled_correct": 0.003946730355788458,
        "overlap_digit_accuracy": 0.006051208152676205,
        "source_A_all_correct": 0.0036972059542970536,
        "source_B_all_correct": 0.014385663928375229,
        "overlap_pair_set_accuracy": 0.03201874279444336,
        "source_swap_rate_given_pair_recovered": 0.03040585451152217
      },
      "per_seed": {
        "0": {
          "digit_accuracy": 0.6818033854166666,
          "all_labeled_correct": 0.01171875,
          "digit_accuracy_by_position": [
            0.96044921875,
            0.5419921875,
            0.54296875
          ],
          "overlap_digit_accuracy": 0.54248046875,
          "source_A_all_correct": 0.341796875,
          "source_B_all_correct": 0.2626953125,
          "pair_set_accuracy_by_position": [
            0.9228515625,
            0.14453125,
            0.126953125
          ],
          "overlap_pair_set_accuracy": 0.1357421875,
          "source_swap_rate_given_pair_recovered": 0.02696871628910464,
          "loss": 0.8196726068854332
        },
        "1": {
          "digit_accuracy": 0.67626953125,
          "all_labeled_correct": 0.0185546875,
          "digit_accuracy_by_position": [
            0.962890625,
            0.5380859375,
            0.52783203125
          ],
          "overlap_digit_accuracy": 0.532958984375,
          "source_A_all_correct": 0.3349609375,
          "source_B_all_correct": 0.2529296875,
          "pair_set_accuracy_by_position": [
            0.927734375,
            0.1806640625,
            0.1689453125
          ],
          "overlap_pair_set_accuracy": 0.1748046875,
          "source_swap_rate_given_pair_recovered": 0.07601184600197433,
          "loss": 0.839305005967617
        },
        "2": {
          "digit_accuracy": 0.6829427083333334,
          "all_labeled_correct": 0.0185546875,
          "digit_accuracy_by_position": [
            0.96044921875,
            0.54443359375,
            0.5439453125
          ],
          "overlap_digit_accuracy": 0.544189453125,
          "source_A_all_correct": 0.3359375,
          "source_B_all_correct": 0.28125,
          "pair_set_accuracy_by_position": [
            0.921875,
            0.1904296875,
            0.2080078125
          ],
          "overlap_pair_set_accuracy": 0.19921875,
          "source_swap_rate_given_pair_recovered": 0.08262910798122065,
          "loss": 0.7261286899447441
        }
      },
      "high_overlap": {
        "examples": 191,
        "digit_accuracy": 0.6817917393833625,
        "all_labeled_correct": 0.02443280977312391
      },
      "trainable_parameters": 1094794,
      "inference_parameters": 1094794,
      "zero_accuracy": 0.1042209201388889,
      "wrong_context_accuracy": 0.10302734375
    },
    {
      "encoder": "wavlm",
      "kind": "mix_post",
      "mode": "B1",
      "budget": 4,
      "group": "main",
      "native_frames": 189,
      "native_dimension": 768,
      "metrics_mean": {
        "digit_accuracy": 0.6844618055555555,
        "all_labeled_correct": 0.0703125,
        "overlap_digit_accuracy": 0.545654296875,
        "source_A_all_correct": 0.3385416666666667,
        "source_B_all_correct": 0.2705078125,
        "overlap_pair_set_accuracy": 0.3414713541666667,
        "source_swap_rate_given_pair_recovered": 0.1312257919987377
      },
      "metrics_seed_sd": {
        "digit_accuracy": 0.006181325495430676,
        "all_labeled_correct": 0.08626977666155382,
        "overlap_digit_accuracy": 0.010838853945519098,
        "source_A_all_correct": 0.027139536910279566,
        "source_B_all_correct": 0.01109161786289116,
        "overlap_pair_set_accuracy": 0.2714177697166803,
        "source_swap_rate_given_pair_recovered": 0.09380235293758311
      },
      "per_seed": {
        "0": {
          "digit_accuracy": 0.6803385416666666,
          "all_labeled_correct": 0.021484375,
          "digit_accuracy_by_position": [
            0.96435546875,
            0.5322265625,
            0.54443359375
          ],
          "overlap_digit_accuracy": 0.538330078125,
          "source_A_all_correct": 0.3173828125,
          "source_B_all_correct": 0.283203125,
          "pair_set_accuracy_by_position": [
            0.9296875,
            0.1982421875,
            0.158203125
          ],
          "overlap_pair_set_accuracy": 0.17822265625,
          "source_swap_rate_given_pair_recovered": 0.07045009784735812,
          "loss": 0.7931148633360863
        },
        "1": {
          "digit_accuracy": 0.6814778645833334,
          "all_labeled_correct": 0.01953125,
          "digit_accuracy_by_position": [
            0.96337890625,
            0.54248046875,
            0.53857421875
          ],
          "overlap_digit_accuracy": 0.54052734375,
          "source_A_all_correct": 0.3291015625,
          "source_B_all_correct": 0.265625,
          "pair_set_accuracy_by_position": [
            0.9287109375,
            0.1884765625,
            0.1943359375
          ],
          "overlap_pair_set_accuracy": 0.19140625,
          "source_swap_rate_given_pair_recovered": 0.08396946564885496,
          "loss": 0.8012976683676243
        },
        "2": {
          "digit_accuracy": 0.6915690104166666,
          "all_labeled_correct": 0.169921875,
          "digit_accuracy_by_position": [
            0.95849609375,
            0.55224609375,
            0.56396484375
          ],
          "overlap_digit_accuracy": 0.55810546875,
          "source_A_all_correct": 0.369140625,
          "source_B_all_correct": 0.2626953125,
          "pair_set_accuracy_by_position": [
            0.91796875,
            0.62109375,
            0.6884765625
          ],
          "overlap_pair_set_accuracy": 0.65478515625,
          "source_swap_rate_given_pair_recovered": 0.2392578125,
          "loss": 1.2790140211582184
        }
      },
      "high_overlap": {
        "examples": 191,
        "digit_accuracy": 0.6783013379872019,
        "all_labeled_correct": 0.04712041884816754
      },
      "trainable_parameters": 1692436,
      "inference_parameters": 1094794,
      "zero_accuracy": 0.09857855902777778,
      "wrong_context_accuracy": 0.10302734375
    },
    {
      "encoder": "wavlm",
      "kind": "mix_post",
      "mode": "B2",
      "budget": 4,
      "group": "main",
      "native_frames": 189,
      "native_dimension": 768,
      "metrics_mean": {
        "digit_accuracy": 0.69580078125,
        "all_labeled_correct": 0.11751302083333333,
        "overlap_digit_accuracy": 0.563720703125,
        "source_A_all_correct": 0.3763020833333333,
        "source_B_all_correct": 0.2854817708333333,
        "overlap_pair_set_accuracy": 0.46630859375,
        "source_swap_rate_given_pair_recovered": 0.16071210024847002
      },
      "metrics_seed_sd": {
        "digit_accuracy": 0.025934124462674808,
        "all_labeled_correct": 0.1005827770539087,
        "overlap_digit_accuracy": 0.036854723511940794,
        "source_A_all_correct": 0.04616087427996099,
        "source_B_all_correct": 0.05109329207873288,
        "overlap_pair_set_accuracy": 0.27282340710696745,
        "source_swap_rate_given_pair_recovered": 0.09350088870506044
      },
      "per_seed": {
        "0": {
          "digit_accuracy": 0.68359375,
          "all_labeled_correct": 0.12890625,
          "digit_accuracy_by_position": [
            0.96142578125,
            0.54150390625,
            0.5478515625
          ],
          "overlap_digit_accuracy": 0.544677734375,
          "source_A_all_correct": 0.3984375,
          "source_B_all_correct": 0.2314453125,
          "pair_set_accuracy_by_position": [
            0.9248046875,
            0.548828125,
            0.578125
          ],
          "overlap_pair_set_accuracy": 0.5634765625,
          "source_swap_rate_given_pair_recovered": 0.223342175066313,
          "loss": 0.9874137677252293
        },
        "1": {
          "digit_accuracy": 0.7255859375,
          "all_labeled_correct": 0.2119140625,
          "digit_accuracy_by_position": [
            0.96435546875,
            0.60546875,
            0.60693359375
          ],
          "overlap_digit_accuracy": 0.606201171875,
          "source_A_all_correct": 0.4072265625,
          "source_B_all_correct": 0.3330078125,
          "pair_set_accuracy_by_position": [
            0.9306640625,
            0.666015625,
            0.6884765625
          ],
          "overlap_pair_set_accuracy": 0.67724609375,
          "source_swap_rate_given_pair_recovered": 0.20555821753713463,
          "loss": 1.7807211130857468
        },
        "2": {
          "digit_accuracy": 0.67822265625,
          "all_labeled_correct": 0.01171875,
          "digit_accuracy_by_position": [
            0.9541015625,
            0.53564453125,
            0.544921875
          ],
          "overlap_digit_accuracy": 0.540283203125,
          "source_A_all_correct": 0.3232421875,
          "source_B_all_correct": 0.2919921875,
          "pair_set_accuracy_by_position": [
            0.91015625,
            0.1640625,
            0.15234375
          ],
          "overlap_pair_set_accuracy": 0.158203125,
          "source_swap_rate_given_pair_recovered": 0.05323590814196242,
          "loss": 0.783070482313633
        }
      },
      "high_overlap": {
        "examples": 191,
        "digit_accuracy": 0.6797556719022687,
        "all_labeled_correct": 0.07853403141361257
      },
      "trainable_parameters": 1692692,
      "inference_parameters": 1161610,
      "zero_accuracy": 0.10427517361111112,
      "wrong_context_accuracy": 0.1067165798611111
    },
    {
      "encoder": "encodec",
      "kind": "mix_post",
      "mode": "B0",
      "budget": 16,
      "group": "main",
      "native_frames": 285,
      "native_dimension": 128,
      "metrics_mean": {
        "digit_accuracy": 0.5614149305555555,
        "all_labeled_correct": 0.005533854166666667,
        "overlap_digit_accuracy": 0.4541829427083333,
        "source_A_all_correct": 0.1875,
        "source_B_all_correct": 0.171875,
        "overlap_pair_set_accuracy": 0.1435546875,
        "source_swap_rate_given_pair_recovered": 0.08306535688589343
      },
      "metrics_seed_sd": {
        "digit_accuracy": 0.010777066822351924,
        "all_labeled_correct": 0.000563818622255494,
        "overlap_digit_accuracy": 0.018119664777191017,
        "source_A_all_correct": 0.012467915366019242,
        "source_B_all_correct": 0.019236050394133015,
        "overlap_pair_set_accuracy": 0.021633669840698946,
        "source_swap_rate_given_pair_recovered": 0.02060690369519797
      },
      "per_seed": {
        "0": {
          "digit_accuracy": 0.5699869791666666,
          "all_labeled_correct": 0.005859375,
          "digit_accuracy_by_position": [
            0.76171875,
            0.4736328125,
            0.474609375
          ],
          "overlap_digit_accuracy": 0.47412109375,
          "source_A_all_correct": 0.1904296875,
          "source_B_all_correct": 0.177734375,
          "pair_set_accuracy_by_position": [
            0.5908203125,
            0.19140625,
            0.1455078125
          ],
          "overlap_pair_set_accuracy": 0.16845703125,
          "source_swap_rate_given_pair_recovered": 0.10144927536231885,
          "loss": 1.21356500685215
        },
        "1": {
          "digit_accuracy": 0.56494140625,
          "all_labeled_correct": 0.005859375,
          "digit_accuracy_by_position": [
            0.79541015625,
            0.42919921875,
            0.47021484375
          ],
          "overlap_digit_accuracy": 0.44970703125,
          "source_A_all_correct": 0.1982421875,
          "source_B_all_correct": 0.1875,
          "pair_set_accuracy_by_position": [
            0.630859375,
            0.1201171875,
            0.138671875
          ],
          "overlap_pair_set_accuracy": 0.12939453125,
          "source_swap_rate_given_pair_recovered": 0.060790273556231005,
          "loss": 1.2528557404875755
        },
        "2": {
          "digit_accuracy": 0.54931640625,
          "all_labeled_correct": 0.0048828125,
          "digit_accuracy_by_position": [
            0.7705078125,
            0.46435546875,
            0.4130859375
          ],
          "overlap_digit_accuracy": 0.438720703125,
          "source_A_all_correct": 0.173828125,
          "source_B_all_correct": 0.150390625,
          "pair_set_accuracy_by_position": [
            0.6123046875,
            0.1669921875,
            0.0986328125
          ],
          "overlap_pair_set_accuracy": 0.1328125,
          "source_swap_rate_given_pair_recovered": 0.08695652173913043,
          "loss": 1.287203498184681
        }
      },
      "high_overlap": {
        "examples": 191,
        "digit_accuracy": 0.5753344968004654,
        "all_labeled_correct": 0.012216404886561954
      },
      "trainable_parameters": 1013130,
      "inference_parameters": 1013130,
      "zero_accuracy": 0.09781901041666667,
      "wrong_context_accuracy": 0.10134548611111112
    },
    {
      "encoder": "encodec",
      "kind": "mix_post",
      "mode": "B1",
      "budget": 16,
      "group": "main",
      "native_frames": 285,
      "native_dimension": 128,
      "metrics_mean": {
        "digit_accuracy": 0.6099717881944444,
        "all_labeled_correct": 0.0087890625,
        "overlap_digit_accuracy": 0.4720052083333333,
        "source_A_all_correct": 0.22135416666666666,
        "source_B_all_correct": 0.2080078125,
        "overlap_pair_set_accuracy": 0.13818359375,
        "source_swap_rate_given_pair_recovered": 0.05784202273371606
      },
      "metrics_seed_sd": {
        "digit_accuracy": 0.011427280464121834,
        "all_labeled_correct": 0.0,
        "overlap_digit_accuracy": 0.01121542102156666,
        "source_A_all_correct": 0.006859149578680168,
        "source_B_all_correct": 0.010874539771152386,
        "overlap_pair_set_accuracy": 0.007042092334890604,
        "source_swap_rate_given_pair_recovered": 0.016313309163418912
      },
      "per_seed": {
        "0": {
          "digit_accuracy": 0.5968424479166666,
          "all_labeled_correct": 0.0087890625,
          "digit_accuracy_by_position": [
            0.8720703125,
            0.462890625,
            0.45556640625
          ],
          "overlap_digit_accuracy": 0.459228515625,
          "source_A_all_correct": 0.21484375,
          "source_B_all_correct": 0.1982421875,
          "pair_set_accuracy_by_position": [
            0.7685546875,
            0.1533203125,
            0.126953125
          ],
          "overlap_pair_set_accuracy": 0.14013671875,
          "source_swap_rate_given_pair_recovered": 0.07178217821782178,
          "loss": 1.1210449635982513
        },
        "1": {
          "digit_accuracy": 0.6153971354166666,
          "all_labeled_correct": 0.0087890625,
          "digit_accuracy_by_position": [
            0.8857421875,
            0.48046875,
            0.47998046875
          ],
          "overlap_digit_accuracy": 0.480224609375,
          "source_A_all_correct": 0.228515625,
          "source_B_all_correct": 0.2060546875,
          "pair_set_accuracy_by_position": [
            0.7958984375,
            0.146484375,
            0.1142578125
          ],
          "overlap_pair_set_accuracy": 0.13037109375,
          "source_swap_rate_given_pair_recovered": 0.0399002493765586,
          "loss": 1.0560640431940556
        },
        "2": {
          "digit_accuracy": 0.61767578125,
          "all_labeled_correct": 0.0087890625,
          "digit_accuracy_by_position": [
            0.89990234375,
            0.4697265625,
            0.4833984375
          ],
          "overlap_digit_accuracy": 0.4765625,
          "source_A_all_correct": 0.220703125,
          "source_B_all_correct": 0.2197265625,
          "pair_set_accuracy_by_position": [
            0.81640625,
            0.15625,
            0.1318359375
          ],
          "overlap_pair_set_accuracy": 0.14404296875,
          "source_swap_rate_given_pair_recovered": 0.061843640606767794,
          "loss": 1.0256642401218414
        }
      },
      "high_overlap": {
        "examples": 191,
        "digit_accuracy": 0.6230366492146598,
        "all_labeled_correct": 0.012216404886561954
      },
      "trainable_parameters": 1610772,
      "inference_parameters": 1013130,
      "zero_accuracy": 0.10172526041666667,
      "wrong_context_accuracy": 0.10020616319444443
    },
    {
      "encoder": "encodec",
      "kind": "mix_post",
      "mode": "B2",
      "budget": 16,
      "group": "main",
      "native_frames": 285,
      "native_dimension": 128,
      "metrics_mean": {
        "digit_accuracy": 0.6065538194444445,
        "all_labeled_correct": 0.006184895833333333,
        "overlap_digit_accuracy": 0.4671223958333333,
        "source_A_all_correct": 0.212890625,
        "source_B_all_correct": 0.20833333333333334,
        "overlap_pair_set_accuracy": 0.14485677083333334,
        "source_swap_rate_given_pair_recovered": 0.06608278228004288
      },
      "metrics_seed_sd": {
        "digit_accuracy": 0.016823738427131227,
        "all_labeled_correct": 0.001127637244510988,
        "overlap_digit_accuracy": 0.01813281800482153,
        "source_A_all_correct": 0.0234375,
        "source_B_all_correct": 0.007953640444577224,
        "overlap_pair_set_accuracy": 0.03390069356413276,
        "source_swap_rate_given_pair_recovered": 0.029708024302085707
      },
      "per_seed": {
        "0": {
          "digit_accuracy": 0.6201171875,
          "all_labeled_correct": 0.0068359375,
          "digit_accuracy_by_position": [
            0.89892578125,
            0.4833984375,
            0.47802734375
          ],
          "overlap_digit_accuracy": 0.480712890625,
          "source_A_all_correct": 0.236328125,
          "source_B_all_correct": 0.2138671875,
          "pair_set_accuracy_by_position": [
            0.8095703125,
            0.201171875,
            0.166015625
          ],
          "overlap_pair_set_accuracy": 0.18359375,
          "source_swap_rate_given_pair_recovered": 0.10021551724137931,
          "loss": 1.0612613074481487
        },
        "1": {
          "digit_accuracy": 0.5877278645833334,
          "all_labeled_correct": 0.0048828125,
          "digit_accuracy_by_position": [
            0.8701171875,
            0.4404296875,
            0.45263671875
          ],
          "overlap_digit_accuracy": 0.446533203125,
          "source_A_all_correct": 0.189453125,
          "source_B_all_correct": 0.19921875,
          "pair_set_accuracy_by_position": [
            0.7646484375,
            0.13671875,
            0.1044921875
          ],
          "overlap_pair_set_accuracy": 0.12060546875,
          "source_swap_rate_given_pair_recovered": 0.046052631578947366,
          "loss": 1.1531092673540115
        },
        "2": {
          "digit_accuracy": 0.61181640625,
          "all_labeled_correct": 0.0068359375,
          "digit_accuracy_by_position": [
            0.88720703125,
            0.470703125,
            0.4775390625
          ],
          "overlap_digit_accuracy": 0.47412109375,
          "source_A_all_correct": 0.212890625,
          "source_B_all_correct": 0.2119140625,
          "pair_set_accuracy_by_position": [
            0.794921875,
            0.142578125,
            0.1181640625
          ],
          "overlap_pair_set_accuracy": 0.13037109375,
          "source_swap_rate_given_pair_recovered": 0.05198019801980198,
          "loss": 1.0618937350809574
        }
      },
      "high_overlap": {
        "examples": 191,
        "digit_accuracy": 0.6151832460732983,
        "all_labeled_correct": 0.012216404886561954
      },
      "trainable_parameters": 1611028,
      "inference_parameters": 1079946,
      "zero_accuracy": 0.10053168402777778,
      "wrong_context_accuracy": 0.10161675347222221
    },
    {
      "encoder": "encodec",
      "kind": "mix_post",
      "mode": "B0",
      "budget": 8,
      "group": "main",
      "native_frames": 285,
      "native_dimension": 128,
      "metrics_mean": {
        "digit_accuracy": 0.6075846354166666,
        "all_labeled_correct": 0.005859375,
        "overlap_digit_accuracy": 0.471435546875,
        "source_A_all_correct": 0.22135416666666666,
        "source_B_all_correct": 0.21451822916666666,
        "overlap_pair_set_accuracy": 0.12874348958333334,
        "source_swap_rate_given_pair_recovered": 0.04426704328582657
      },
      "metrics_seed_sd": {
        "digit_accuracy": 0.005722134059650698,
        "all_labeled_correct": 0.0,
        "overlap_digit_accuracy": 0.006712757365657969,
        "source_A_all_correct": 0.003946730355788458,
        "source_B_all_correct": 0.013822183428100354,
        "overlap_pair_set_accuracy": 0.01666129343520242,
        "source_swap_rate_given_pair_recovered": 0.015008551929237514
      },
      "per_seed": {
        "0": {
          "digit_accuracy": 0.6140950520833334,
          "all_labeled_correct": 0.005859375,
          "digit_accuracy_by_position": [
            0.884765625,
            0.48291015625,
            0.474609375
          ],
          "overlap_digit_accuracy": 0.478759765625,
          "source_A_all_correct": 0.2236328125,
          "source_B_all_correct": 0.23046875,
          "pair_set_accuracy_by_position": [
            0.787109375,
            0.12890625,
            0.111328125
          ],
          "overlap_pair_set_accuracy": 0.1201171875,
          "source_swap_rate_given_pair_recovered": 0.039897039897039896,
          "loss": 1.0586915910243988
        },
        "1": {
          "digit_accuracy": 0.6033528645833334,
          "all_labeled_correct": 0.005859375,
          "digit_accuracy_by_position": [
            0.8701171875,
            0.4658203125,
            0.47412109375
          ],
          "overlap_digit_accuracy": 0.469970703125,
          "source_A_all_correct": 0.2236328125,
          "source_B_all_correct": 0.2060546875,
          "pair_set_accuracy_by_position": [
            0.765625,
            0.16015625,
            0.1357421875
          ],
          "overlap_pair_set_accuracy": 0.14794921875,
          "source_swap_rate_given_pair_recovered": 0.06097560975609756,
          "loss": 1.0906136520206928
        },
        "2": {
          "digit_accuracy": 0.6053059895833334,
          "all_labeled_correct": 0.005859375,
          "digit_accuracy_by_position": [
            0.884765625,
            0.45654296875,
            0.474609375
          ],
          "overlap_digit_accuracy": 0.465576171875,
          "source_A_all_correct": 0.216796875,
          "source_B_all_correct": 0.20703125,
          "pair_set_accuracy_by_position": [
            0.7939453125,
            0.12109375,
            0.115234375
          ],
          "overlap_pair_set_accuracy": 0.1181640625,
          "source_swap_rate_given_pair_recovered": 0.031928480204342274,
          "loss": 1.1093350797891617
        }
      },
      "high_overlap": {
        "examples": 191,
        "digit_accuracy": 0.6178010471204188,
        "all_labeled_correct": 0.008726003490401398
      },
      "trainable_parameters": 1012106,
      "inference_parameters": 1012106,
      "zero_accuracy": 0.099609375,
      "wrong_context_accuracy": 0.10221354166666667
    },
    {
      "encoder": "encodec",
      "kind": "mix_post",
      "mode": "B1",
      "budget": 8,
      "group": "main",
      "native_frames": 285,
      "native_dimension": 128,
      "metrics_mean": {
        "digit_accuracy": 0.6128472222222223,
        "all_labeled_correct": 0.009765625,
        "overlap_digit_accuracy": 0.4737955729166667,
        "source_A_all_correct": 0.22786458333333334,
        "source_B_all_correct": 0.20377604166666666,
        "overlap_pair_set_accuracy": 0.15266927083333334,
        "source_swap_rate_given_pair_recovered": 0.06660859341696733
      },
      "metrics_seed_sd": {
        "digit_accuracy": 0.016939859377901906,
        "all_labeled_correct": 0.00390625,
        "overlap_digit_accuracy": 0.017750775208357522,
        "source_A_all_correct": 0.022616085537346023,
        "source_B_all_correct": 0.013718299157360336,
        "overlap_pair_set_accuracy": 0.009696205083728177,
        "source_swap_rate_given_pair_recovered": 0.002225038969208588
      },
      "per_seed": {
        "0": {
          "digit_accuracy": 0.62939453125,
          "all_labeled_correct": 0.013671875,
          "digit_accuracy_by_position": [
            0.90673828125,
            0.4892578125,
            0.4921875
          ],
          "overlap_digit_accuracy": 0.49072265625,
          "source_A_all_correct": 0.2529296875,
          "source_B_all_correct": 0.216796875,
          "pair_set_accuracy_by_position": [
            0.8310546875,
            0.1953125,
            0.126953125
          ],
          "overlap_pair_set_accuracy": 0.1611328125,
          "source_swap_rate_given_pair_recovered": 0.06674082313681869,
          "loss": 1.0088603384792805
        },
        "1": {
          "digit_accuracy": 0.6136067708333334,
          "all_labeled_correct": 0.009765625,
          "digit_accuracy_by_position": [
            0.89013671875,
            0.4755859375,
            0.47509765625
          ],
          "overlap_digit_accuracy": 0.475341796875,
          "source_A_all_correct": 0.2216796875,
          "source_B_all_correct": 0.205078125,
          "pair_set_accuracy_by_position": [
            0.794921875,
            0.1845703125,
            0.125
          ],
          "overlap_pair_set_accuracy": 0.15478515625,
          "source_swap_rate_given_pair_recovered": 0.06876456876456877,
          "loss": 1.0914735309779644
        },
        "2": {
          "digit_accuracy": 0.5955403645833334,
          "all_labeled_correct": 0.005859375,
          "digit_accuracy_by_position": [
            0.8759765625,
            0.4521484375,
            0.45849609375
          ],
          "overlap_digit_accuracy": 0.455322265625,
          "source_A_all_correct": 0.208984375,
          "source_B_all_correct": 0.189453125,
          "pair_set_accuracy_by_position": [
            0.7763671875,
            0.14453125,
            0.1396484375
          ],
          "overlap_pair_set_accuracy": 0.14208984375,
          "source_swap_rate_given_pair_recovered": 0.06432038834951456,
          "loss": 1.1519163027405739
        }
      },
      "high_overlap": {
        "examples": 191,
        "digit_accuracy": 0.6221640488656196,
        "all_labeled_correct": 0.017452006980802792
      },
      "trainable_parameters": 1609748,
      "inference_parameters": 1012106,
      "zero_accuracy": 0.10194227430555557,
      "wrong_context_accuracy": 0.0993381076388889
    },
    {
      "encoder": "encodec",
      "kind": "mix_post",
      "mode": "B2",
      "budget": 8,
      "group": "main",
      "native_frames": 285,
      "native_dimension": 128,
      "metrics_mean": {
        "digit_accuracy": 0.5939127604166666,
        "all_labeled_correct": 0.008138020833333334,
        "overlap_digit_accuracy": 0.4585774739583333,
        "source_A_all_correct": 0.21061197916666666,
        "source_B_all_correct": 0.19921875,
        "overlap_pair_set_accuracy": 0.1337890625,
        "source_swap_rate_given_pair_recovered": 0.05045755640831425
      },
      "metrics_seed_sd": {
        "digit_accuracy": 0.014545901260355808,
        "all_labeled_correct": 0.0005638186222554939,
        "overlap_digit_accuracy": 0.019238116010288676,
        "source_A_all_correct": 0.027453972415658532,
        "source_B_all_correct": 0.012236293052872722,
        "overlap_pair_set_accuracy": 0.011626836816201814,
        "source_swap_rate_given_pair_recovered": 0.006091512631851672
      },
      "per_seed": {
        "0": {
          "digit_accuracy": 0.6097005208333334,
          "all_labeled_correct": 0.0087890625,
          "digit_accuracy_by_position": [
            0.86962890625,
            0.48046875,
            0.47900390625
          ],
          "overlap_digit_accuracy": 0.479736328125,
          "source_A_all_correct": 0.2421875,
          "source_B_all_correct": 0.2119140625,
          "pair_set_accuracy_by_position": [
            0.763671875,
            0.1591796875,
            0.134765625
          ],
          "overlap_pair_set_accuracy": 0.14697265625,
          "source_swap_rate_given_pair_recovered": 0.05745721271393643,
          "loss": 1.0797111205756664
        },
        "1": {
          "digit_accuracy": 0.5909830729166666,
          "all_labeled_correct": 0.0078125,
          "digit_accuracy_by_position": [
            0.865234375,
            0.4462890625,
            0.46142578125
          ],
          "overlap_digit_accuracy": 0.453857421875,
          "source_A_all_correct": 0.197265625,
          "source_B_all_correct": 0.1982421875,
          "pair_set_accuracy_by_position": [
            0.759765625,
            0.1455078125,
            0.11328125
          ],
          "overlap_pair_set_accuracy": 0.12939453125,
          "source_swap_rate_given_pair_recovered": 0.04755784061696658,
          "loss": 1.1593956649303436
        },
        "2": {
          "digit_accuracy": 0.5810546875,
          "all_labeled_correct": 0.0078125,
          "digit_accuracy_by_position": [
            0.85888671875,
            0.4384765625,
            0.44580078125
          ],
          "overlap_digit_accuracy": 0.442138671875,
          "source_A_all_correct": 0.1923828125,
          "source_B_all_correct": 0.1875,
          "pair_set_accuracy_by_position": [
            0.7421875,
            0.142578125,
            0.107421875
          ],
          "overlap_pair_set_accuracy": 0.125,
          "source_swap_rate_given_pair_recovered": 0.046357615894039736,
          "loss": 1.200319305062294
        }
      },
      "high_overlap": {
        "examples": 191,
        "digit_accuracy": 0.6052937754508435,
        "all_labeled_correct": 0.010471204188481678
      },
      "trainable_parameters": 1610004,
      "inference_parameters": 1078922,
      "zero_accuracy": 0.10096571180555557,
      "wrong_context_accuracy": 0.1028103298611111
    },
    {
      "encoder": "encodec",
      "kind": "mix_post",
      "mode": "B0",
      "budget": 4,
      "group": "main",
      "native_frames": 285,
      "native_dimension": 128,
      "metrics_mean": {
        "digit_accuracy": 0.5880533854166666,
        "all_labeled_correct": 0.007486979166666667,
        "overlap_digit_accuracy": 0.467041015625,
        "source_A_all_correct": 0.20052083333333334,
        "source_B_all_correct": 0.18522135416666666,
        "overlap_pair_set_accuracy": 0.15397135416666666,
        "source_swap_rate_given_pair_recovered": 0.08067587944888559
      },
      "metrics_seed_sd": {
        "digit_accuracy": 0.009222930707361437,
        "all_labeled_correct": 0.0024576283968980304,
        "overlap_digit_accuracy": 0.01311105623251714,
        "source_A_all_correct": 0.018563251861176112,
        "source_B_all_correct": 0.003697205954297053,
        "overlap_pair_set_accuracy": 0.028076525699763245,
        "source_swap_rate_given_pair_recovered": 0.03378574418334706
      },
      "per_seed": {
        "0": {
          "digit_accuracy": 0.5963541666666666,
          "all_labeled_correct": 0.009765625,
          "digit_accuracy_by_position": [
            0.83154296875,
            0.484375,
            0.47314453125
          ],
          "overlap_digit_accuracy": 0.478759765625,
          "source_A_all_correct": 0.21875,
          "source_B_all_correct": 0.189453125,
          "pair_set_accuracy_by_position": [
            0.7001953125,
            0.19140625,
            0.1513671875
          ],
          "overlap_pair_set_accuracy": 0.17138671875,
          "source_swap_rate_given_pair_recovered": 0.10061349693251534,
          "loss": 1.104625303298235
        },
        "1": {
          "digit_accuracy": 0.578125,
          "all_labeled_correct": 0.0048828125,
          "digit_accuracy_by_position": [
            0.82861328125,
            0.4482421875,
            0.45751953125
          ],
          "overlap_digit_accuracy": 0.452880859375,
          "source_A_all_correct": 0.181640625,
          "source_B_all_correct": 0.18359375,
          "pair_set_accuracy_by_position": [
            0.689453125,
            0.1318359375,
            0.111328125
          ],
          "overlap_pair_set_accuracy": 0.12158203125,
          "source_swap_rate_given_pair_recovered": 0.041666666666666664,
          "loss": 1.1649836227297783
        },
        "2": {
          "digit_accuracy": 0.5896809895833334,
          "all_labeled_correct": 0.0078125,
          "digit_accuracy_by_position": [
            0.830078125,
            0.47265625,
            0.46630859375
          ],
          "overlap_digit_accuracy": 0.469482421875,
          "source_A_all_correct": 0.201171875,
          "source_B_all_correct": 0.1826171875,
          "pair_set_accuracy_by_position": [
            0.6982421875,
            0.1943359375,
            0.1435546875
          ],
          "overlap_pair_set_accuracy": 0.1689453125,
          "source_swap_rate_given_pair_recovered": 0.09974747474747475,
          "loss": 1.1314700618386269
        }
      },
      "high_overlap": {
        "examples": 191,
        "digit_accuracy": 0.6006399069226295,
        "all_labeled_correct": 0.013961605584642234
      },
      "trainable_parameters": 1011594,
      "inference_parameters": 1011594,
      "zero_accuracy": 0.10210503472222221,
      "wrong_context_accuracy": 0.10161675347222221
    },
    {
      "encoder": "encodec",
      "kind": "mix_post",
      "mode": "B1",
      "budget": 4,
      "group": "main",
      "native_frames": 285,
      "native_dimension": 128,
      "metrics_mean": {
        "digit_accuracy": 0.5813259548611112,
        "all_labeled_correct": 0.007486979166666667,
        "overlap_digit_accuracy": 0.4453938802083333,
        "source_A_all_correct": 0.18977864583333334,
        "source_B_all_correct": 0.171875,
        "overlap_pair_set_accuracy": 0.13818359375,
        "source_swap_rate_given_pair_recovered": 0.0660073994182725
      },
      "metrics_seed_sd": {
        "digit_accuracy": 0.018530638578593623,
        "all_labeled_correct": 0.000563818622255494,
        "overlap_digit_accuracy": 0.011815834557020928,
        "source_A_all_correct": 0.0184343686650622,
        "source_B_all_correct": 0.016428324063731174,
        "overlap_pair_set_accuracy": 0.010596940631938822,
        "source_swap_rate_given_pair_recovered": 0.0024666402844696293
      },
      "per_seed": {
        "0": {
          "digit_accuracy": 0.576171875,
          "all_labeled_correct": 0.0078125,
          "digit_accuracy_by_position": [
            0.84423828125,
            0.43212890625,
            0.4521484375
          ],
          "overlap_digit_accuracy": 0.442138671875,
          "source_A_all_correct": 0.185546875,
          "source_B_all_correct": 0.177734375,
          "pair_set_accuracy_by_position": [
            0.7177734375,
            0.126953125,
            0.138671875
          ],
          "overlap_pair_set_accuracy": 0.1328125,
          "source_swap_rate_given_pair_recovered": 0.06340819022457067,
          "loss": 1.2217424660921097
        },
        "1": {
          "digit_accuracy": 0.6018880208333334,
          "all_labeled_correct": 0.0078125,
          "digit_accuracy_by_position": [
            0.888671875,
            0.45947265625,
            0.45751953125
          ],
          "overlap_digit_accuracy": 0.45849609375,
          "source_A_all_correct": 0.2099609375,
          "source_B_all_correct": 0.1845703125,
          "pair_set_accuracy_by_position": [
            0.796875,
            0.1689453125,
            0.1318359375
          ],
          "overlap_pair_set_accuracy": 0.150390625,
          "source_swap_rate_given_pair_recovered": 0.06831566548881036,
          "loss": 1.116876795887947
        },
        "2": {
          "digit_accuracy": 0.56591796875,
          "all_labeled_correct": 0.0068359375,
          "digit_accuracy_by_position": [
            0.82666015625,
            0.4296875,
            0.44140625
          ],
          "overlap_digit_accuracy": 0.435546875,
          "source_A_all_correct": 0.173828125,
          "source_B_all_correct": 0.1533203125,
          "pair_set_accuracy_by_position": [
            0.6923828125,
            0.1435546875,
            0.119140625
          ],
          "overlap_pair_set_accuracy": 0.13134765625,
          "source_swap_rate_given_pair_recovered": 0.06629834254143646,
          "loss": 1.2599425613880157
        }
      },
      "high_overlap": {
        "examples": 191,
        "digit_accuracy": 0.5849331006399069,
        "all_labeled_correct": 0.012216404886561954
      },
      "trainable_parameters": 1609236,
      "inference_parameters": 1011594,
      "zero_accuracy": 0.09906684027777778,
      "wrong_context_accuracy": 0.10026041666666667
    },
    {
      "encoder": "encodec",
      "kind": "mix_post",
      "mode": "B2",
      "budget": 4,
      "group": "main",
      "native_frames": 285,
      "native_dimension": 128,
      "metrics_mean": {
        "digit_accuracy": 0.6102430555555556,
        "all_labeled_correct": 0.009440104166666666,
        "overlap_digit_accuracy": 0.4733072916666667,
        "source_A_all_correct": 0.22200520833333334,
        "source_B_all_correct": 0.20768229166666666,
        "overlap_pair_set_accuracy": 0.14860026041666666,
        "source_swap_rate_given_pair_recovered": 0.06435048046307625
      },
      "metrics_seed_sd": {
        "digit_accuracy": 0.011041747918619733,
        "all_labeled_correct": 0.0014917238590351043,
        "overlap_digit_accuracy": 0.011178157436006343,
        "source_A_all_correct": 0.015512698642505022,
        "source_B_all_correct": 0.014296999515623535,
        "overlap_pair_set_accuracy": 0.016115747128237715,
        "source_swap_rate_given_pair_recovered": 0.008818779684953893
      },
      "per_seed": {
        "0": {
          "digit_accuracy": 0.6165364583333334,
          "all_labeled_correct": 0.009765625,
          "digit_accuracy_by_position": [
            0.88818359375,
            0.4736328125,
            0.48779296875
          ],
          "overlap_digit_accuracy": 0.480712890625,
          "source_A_all_correct": 0.2314453125,
          "source_B_all_correct": 0.220703125,
          "pair_set_accuracy_by_position": [
            0.7939453125,
            0.173828125,
            0.1552734375
          ],
          "overlap_pair_set_accuracy": 0.16455078125,
          "source_swap_rate_given_pair_recovered": 0.07394766780432309,
          "loss": 1.0662713684141636
        },
        "1": {
          "digit_accuracy": 0.5974934895833334,
          "all_labeled_correct": 0.0078125,
          "digit_accuracy_by_position": [
            0.87158203125,
            0.4599609375,
            0.4609375
          ],
          "overlap_digit_accuracy": 0.46044921875,
          "source_A_all_correct": 0.2041015625,
          "source_B_all_correct": 0.1923828125,
          "pair_set_accuracy_by_position": [
            0.767578125,
            0.1552734375,
            0.109375
          ],
          "overlap_pair_set_accuracy": 0.13232421875,
          "source_swap_rate_given_pair_recovered": 0.05660377358490566,
          "loss": 1.1123207621276379
        },
        "2": {
          "digit_accuracy": 0.61669921875,
          "all_labeled_correct": 0.0107421875,
          "digit_accuracy_by_position": [
            0.892578125,
            0.4775390625,
            0.47998046875
          ],
          "overlap_digit_accuracy": 0.478759765625,
          "source_A_all_correct": 0.23046875,
          "source_B_all_correct": 0.2099609375,
          "pair_set_accuracy_by_position": [
            0.7978515625,
            0.1572265625,
            0.140625
          ],
          "overlap_pair_set_accuracy": 0.14892578125,
          "source_swap_rate_given_pair_recovered": 0.0625,
          "loss": 1.0588607862591743
        }
      },
      "high_overlap": {
        "examples": 191,
        "digit_accuracy": 0.6157649796393252,
        "all_labeled_correct": 0.013961605584642234
      },
      "trainable_parameters": 1609492,
      "inference_parameters": 1078410,
      "zero_accuracy": 0.09814453125,
      "wrong_context_accuracy": 0.10069444444444446
    },
    {
      "encoder": "speech",
      "kind": "mix_post",
      "mode": "B0",
      "budget": 16,
      "group": "main",
      "native_frames": 190,
      "native_dimension": 1024,
      "metrics_mean": {
        "digit_accuracy": 0.65771484375,
        "all_labeled_correct": 0.013997395833333334,
        "overlap_digit_accuracy": 0.5121256510416666,
        "source_A_all_correct": 0.2679036458333333,
        "source_B_all_correct": 0.255859375,
        "overlap_pair_set_accuracy": 0.17024739583333334,
        "source_swap_rate_given_pair_recovered": 0.06767427410547444
      },
      "metrics_seed_sd": {
        "digit_accuracy": 0.007064627087959215,
        "all_labeled_correct": 0.003429574789340084,
        "overlap_digit_accuracy": 0.011070998955520151,
        "source_A_all_correct": 0.02807227950826873,
        "source_B_all_correct": 0.0068359375,
        "overlap_pair_set_accuracy": 0.012490205106087024,
        "source_swap_rate_given_pair_recovered": 0.013575954663672962
      },
      "per_seed": {
        "0": {
          "digit_accuracy": 0.6541341145833334,
          "all_labeled_correct": 0.017578125,
          "digit_accuracy_by_position": [
            0.9501953125,
            0.51513671875,
            0.4970703125
          ],
          "overlap_digit_accuracy": 0.506103515625,
          "source_A_all_correct": 0.263671875,
          "source_B_all_correct": 0.2490234375,
          "pair_set_accuracy_by_position": [
            0.9052734375,
            0.2255859375,
            0.138671875
          ],
          "overlap_pair_set_accuracy": 0.18212890625,
          "source_swap_rate_given_pair_recovered": 0.07821782178217822,
          "loss": 1.0383135192096233
        },
        "1": {
          "digit_accuracy": 0.6658528645833334,
          "all_labeled_correct": 0.013671875,
          "digit_accuracy_by_position": [
            0.94775390625,
            0.53173828125,
            0.51806640625
          ],
          "overlap_digit_accuracy": 0.52490234375,
          "source_A_all_correct": 0.2978515625,
          "source_B_all_correct": 0.255859375,
          "pair_set_accuracy_by_position": [
            0.8994140625,
            0.2109375,
            0.1318359375
          ],
          "overlap_pair_set_accuracy": 0.17138671875,
          "source_swap_rate_given_pair_recovered": 0.07244897959183673,
          "loss": 0.8670952059328556
        },
        "2": {
          "digit_accuracy": 0.6531575520833334,
          "all_labeled_correct": 0.0107421875,
          "digit_accuracy_by_position": [
            0.94873046875,
            0.5087890625,
            0.501953125
          ],
          "overlap_digit_accuracy": 0.50537109375,
          "source_A_all_correct": 0.2421875,
          "source_B_all_correct": 0.2626953125,
          "pair_set_accuracy_by_position": [
            0.900390625,
            0.1845703125,
            0.1298828125
          ],
          "overlap_pair_set_accuracy": 0.1572265625,
          "source_swap_rate_given_pair_recovered": 0.05235602094240838,
          "loss": 1.0250709019601345
        }
      },
      "high_overlap": {
        "examples": 191,
        "digit_accuracy": 0.6582315299592787,
        "all_labeled_correct": 0.017452006980802792
      },
      "trainable_parameters": 1129610,
      "inference_parameters": 1129610,
      "zero_accuracy": 0.09651692708333333,
      "wrong_context_accuracy": 0.1022677951388889
    },
    {
      "encoder": "speech",
      "kind": "mix_post",
      "mode": "B1",
      "budget": 16,
      "group": "main",
      "native_frames": 190,
      "native_dimension": 1024,
      "metrics_mean": {
        "digit_accuracy": 0.6673177083333334,
        "all_labeled_correct": 0.035807291666666664,
        "overlap_digit_accuracy": 0.5205891927083334,
        "source_A_all_correct": 0.26953125,
        "source_B_all_correct": 0.2770182291666667,
        "overlap_pair_set_accuracy": 0.2776692708333333,
        "source_swap_rate_given_pair_recovered": 0.13490717376347539
      },
      "metrics_seed_sd": {
        "digit_accuracy": 0.004513484578080092,
        "all_labeled_correct": 0.01581709715267753,
        "overlap_digit_accuracy": 0.007064627087959214,
        "source_A_all_correct": 0.01631180965672858,
        "source_B_all_correct": 0.011444268119301396,
        "overlap_pair_set_accuracy": 0.10364950866828124,
        "source_swap_rate_given_pair_recovered": 0.0637386808422673
      },
      "per_seed": {
        "0": {
          "digit_accuracy": 0.6700846354166666,
          "all_labeled_correct": 0.017578125,
          "digit_accuracy_by_position": [
            0.9619140625,
            0.52783203125,
            0.5205078125
          ],
          "overlap_digit_accuracy": 0.524169921875,
          "source_A_all_correct": 0.287109375,
          "source_B_all_correct": 0.2724609375,
          "pair_set_accuracy_by_position": [
            0.923828125,
            0.1806640625,
            0.140625
          ],
          "overlap_pair_set_accuracy": 0.16064453125,
          "source_swap_rate_given_pair_recovered": 0.06345957011258956,
          "loss": 0.793156486004591
        },
        "1": {
          "digit_accuracy": 0.6697591145833334,
          "all_labeled_correct": 0.0439453125,
          "digit_accuracy_by_position": [
            0.958984375,
            0.529296875,
            0.52099609375
          ],
          "overlap_digit_accuracy": 0.525146484375,
          "source_A_all_correct": 0.2666015625,
          "source_B_all_correct": 0.2900390625,
          "pair_set_accuracy_by_position": [
            0.91796875,
            0.3671875,
            0.26171875
          ],
          "overlap_pair_set_accuracy": 0.314453125,
          "source_swap_rate_given_pair_recovered": 0.1553323029366306,
          "loss": 0.8764359913766384
        },
        "2": {
          "digit_accuracy": 0.662109375,
          "all_labeled_correct": 0.0458984375,
          "digit_accuracy_by_position": [
            0.96142578125,
            0.51123046875,
            0.513671875
          ],
          "overlap_digit_accuracy": 0.512451171875,
          "source_A_all_correct": 0.2548828125,
          "source_B_all_correct": 0.2685546875,
          "pair_set_accuracy_by_position": [
            0.923828125,
            0.3759765625,
            0.33984375
          ],
          "overlap_pair_set_accuracy": 0.35791015625,
          "source_swap_rate_given_pair_recovered": 0.18592964824120603,
          "loss": 0.9327234588563442
        }
      },
      "high_overlap": {
        "examples": 191,
        "digit_accuracy": 0.6678301337987204,
        "all_labeled_correct": 0.034904013961605584
      },
      "trainable_parameters": 1727252,
      "inference_parameters": 1129610,
      "zero_accuracy": 0.09771050347222222,
      "wrong_context_accuracy": 0.10514322916666667
    },
    {
      "encoder": "speech",
      "kind": "mix_post",
      "mode": "B2",
      "budget": 16,
      "group": "main",
      "native_frames": 190,
      "native_dimension": 1024,
      "metrics_mean": {
        "digit_accuracy": 0.6642795138888888,
        "all_labeled_correct": 0.0166015625,
        "overlap_digit_accuracy": 0.5196940104166666,
        "source_A_all_correct": 0.2727864583333333,
        "source_B_all_correct": 0.2682291666666667,
        "overlap_pair_set_accuracy": 0.17936197916666666,
        "source_swap_rate_given_pair_recovered": 0.07038978596855607
      },
      "metrics_seed_sd": {
        "digit_accuracy": 0.002371689778037571,
        "all_labeled_correct": 0.01019561182510796,
        "overlap_digit_accuracy": 0.004773766072937,
        "source_A_all_correct": 0.0184343686650622,
        "source_B_all_correct": 0.006353913182273156,
        "overlap_pair_set_accuracy": 0.0824622081162963,
        "source_swap_rate_given_pair_recovered": 0.06401777989949059
      },
      "per_seed": {
        "0": {
          "digit_accuracy": 0.66162109375,
          "all_labeled_correct": 0.01171875,
          "digit_accuracy_by_position": [
            0.9560546875,
            0.51416015625,
            0.5146484375
          ],
          "overlap_digit_accuracy": 0.514404296875,
          "source_A_all_correct": 0.2685546875,
          "source_B_all_correct": 0.26171875,
          "pair_set_accuracy_by_position": [
            0.9130859375,
            0.15234375,
            0.12109375
          ],
          "overlap_pair_set_accuracy": 0.13671875,
          "source_swap_rate_given_pair_recovered": 0.04560260586319218,
          "loss": 0.8909340798854828
        },
        "1": {
          "digit_accuracy": 0.6661783854166666,
          "all_labeled_correct": 0.009765625,
          "digit_accuracy_by_position": [
            0.951171875,
            0.5263671875,
            0.52099609375
          ],
          "overlap_digit_accuracy": 0.523681640625,
          "source_A_all_correct": 0.29296875,
          "source_B_all_correct": 0.2744140625,
          "pair_set_accuracy_by_position": [
            0.904296875,
            0.1318359375,
            0.1220703125
          ],
          "overlap_pair_set_accuracy": 0.126953125,
          "source_swap_rate_given_pair_recovered": 0.02247191011235955,
          "loss": 0.8230936117470264
        },
        "2": {
          "digit_accuracy": 0.6650390625,
          "all_labeled_correct": 0.0283203125,
          "digit_accuracy_by_position": [
            0.953125,
            0.52587890625,
            0.51611328125
          ],
          "overlap_digit_accuracy": 0.52099609375,
          "source_A_all_correct": 0.2568359375,
          "source_B_all_correct": 0.2685546875,
          "pair_set_accuracy_by_position": [
            0.908203125,
            0.318359375,
            0.23046875
          ],
          "overlap_pair_set_accuracy": 0.2744140625,
          "source_swap_rate_given_pair_recovered": 0.14309484193011648,
          "loss": 0.8620197102427483
        }
      },
      "high_overlap": {
        "examples": 191,
        "digit_accuracy": 0.6666666666666669,
        "all_labeled_correct": 0.022687609075043632
      },
      "trainable_parameters": 1727508,
      "inference_parameters": 1196426,
      "zero_accuracy": 0.09890407986111112,
      "wrong_context_accuracy": 0.10335286458333333
    },
    {
      "encoder": "speech",
      "kind": "mix_post",
      "mode": "B0",
      "budget": 8,
      "group": "main",
      "native_frames": 190,
      "native_dimension": 1024,
      "metrics_mean": {
        "digit_accuracy": 0.6598307291666666,
        "all_labeled_correct": 0.014322916666666666,
        "overlap_digit_accuracy": 0.5098470052083334,
        "source_A_all_correct": 0.2685546875,
        "source_B_all_correct": 0.2552083333333333,
        "overlap_pair_set_accuracy": 0.19270833333333334,
        "source_swap_rate_given_pair_recovered": 0.08407702044865346
      },
      "metrics_seed_sd": {
        "digit_accuracy": 0.011354799398821589,
        "all_labeled_correct": 0.0024576283968980304,
        "overlap_digit_accuracy": 0.016152690128793095,
        "source_A_all_correct": 0.012918707573557571,
        "source_B_all_correct": 0.019539386326118385,
        "overlap_pair_set_accuracy": 0.014949169926048222,
        "source_swap_rate_given_pair_recovered": 0.02521992258355908
      },
      "per_seed": {
        "0": {
          "digit_accuracy": 0.6717122395833334,
          "all_labeled_correct": 0.01171875,
          "digit_accuracy_by_position": [
            0.9619140625,
            0.533203125,
            0.52001953125
          ],
          "overlap_digit_accuracy": 0.526611328125,
          "source_A_all_correct": 0.283203125,
          "source_B_all_correct": 0.2744140625,
          "pair_set_accuracy_by_position": [
            0.9267578125,
            0.208984375,
            0.16015625
          ],
          "overlap_pair_set_accuracy": 0.1845703125,
          "source_swap_rate_given_pair_recovered": 0.06304558680892337,
          "loss": 0.9372114427387714
        },
        "1": {
          "digit_accuracy": 0.65869140625,
          "all_labeled_correct": 0.0166015625,
          "digit_accuracy_by_position": [
            0.958984375,
            0.51513671875,
            0.501953125
          ],
          "overlap_digit_accuracy": 0.508544921875,
          "source_A_all_correct": 0.263671875,
          "source_B_all_correct": 0.255859375,
          "pair_set_accuracy_by_position": [
            0.919921875,
            0.197265625,
            0.169921875
          ],
          "overlap_pair_set_accuracy": 0.18359375,
          "source_swap_rate_given_pair_recovered": 0.0771484375,
          "loss": 0.9994762241840363
        },
        "2": {
          "digit_accuracy": 0.6490885416666666,
          "all_labeled_correct": 0.0146484375,
          "digit_accuracy_by_position": [
            0.95849609375,
            0.4951171875,
            0.49365234375
          ],
          "overlap_digit_accuracy": 0.494384765625,
          "source_A_all_correct": 0.2587890625,
          "source_B_all_correct": 0.2353515625,
          "pair_set_accuracy_by_position": [
            0.91796875,
            0.236328125,
            0.18359375
          ],
          "overlap_pair_set_accuracy": 0.2099609375,
          "source_swap_rate_given_pair_recovered": 0.11203703703703703,
          "loss": 1.088128250092268
        }
      },
      "high_overlap": {
        "examples": 191,
        "digit_accuracy": 0.6608493310063991,
        "all_labeled_correct": 0.02443280977312391
      },
      "trainable_parameters": 1128586,
      "inference_parameters": 1128586,
      "zero_accuracy": 0.09933810763888888,
      "wrong_context_accuracy": 0.10264756944444443
    },
    {
      "encoder": "speech",
      "kind": "mix_post",
      "mode": "B1",
      "budget": 8,
      "group": "main",
      "native_frames": 190,
      "native_dimension": 1024,
      "metrics_mean": {
        "digit_accuracy": 0.6629774305555557,
        "all_labeled_correct": 0.017252604166666668,
        "overlap_digit_accuracy": 0.5160319010416666,
        "source_A_all_correct": 0.271484375,
        "source_B_all_correct": 0.2574869791666667,
        "overlap_pair_set_accuracy": 0.19368489583333334,
        "source_swap_rate_given_pair_recovered": 0.08146244072812969
      },
      "metrics_seed_sd": {
        "digit_accuracy": 0.002848694790109627,
        "all_labeled_correct": 0.0029834477180702085,
        "overlap_digit_accuracy": 0.000745861929517552,
        "source_A_all_correct": 0.0126953125,
        "source_B_all_correct": 0.005886439231779012,
        "overlap_pair_set_accuracy": 0.023008014222552307,
        "source_swap_rate_given_pair_recovered": 0.018603425447368115
      },
      "per_seed": {
        "0": {
          "digit_accuracy": 0.66015625,
          "all_labeled_correct": 0.0205078125,
          "digit_accuracy_by_position": [
            0.94970703125,
            0.51708984375,
            0.513671875
          ],
          "overlap_digit_accuracy": 0.515380859375,
          "source_A_all_correct": 0.2841796875,
          "source_B_all_correct": 0.251953125,
          "pair_set_accuracy_by_position": [
            0.900390625,
            0.208984375,
            0.1494140625
          ],
          "overlap_pair_set_accuracy": 0.17919921875,
          "source_swap_rate_given_pair_recovered": 0.06733668341708543,
          "loss": 0.9439139477908611
        },
        "1": {
          "digit_accuracy": 0.6629231770833334,
          "all_labeled_correct": 0.0146484375,
          "digit_accuracy_by_position": [
            0.95703125,
            0.5087890625,
            0.52294921875
          ],
          "overlap_digit_accuracy": 0.515869140625,
          "source_A_all_correct": 0.271484375,
          "source_B_all_correct": 0.2568359375,
          "pair_set_accuracy_by_position": [
            0.916015625,
            0.203125,
            0.16015625
          ],
          "overlap_pair_set_accuracy": 0.181640625,
          "source_swap_rate_given_pair_recovered": 0.07450980392156863,
          "loss": 0.9225727841258049
        },
        "2": {
          "digit_accuracy": 0.6658528645833334,
          "all_labeled_correct": 0.0166015625,
          "digit_accuracy_by_position": [
            0.9638671875,
            0.51806640625,
            0.515625
          ],
          "overlap_digit_accuracy": 0.516845703125,
          "source_A_all_correct": 0.2587890625,
          "source_B_all_correct": 0.263671875,
          "pair_set_accuracy_by_position": [
            0.9287109375,
            0.2314453125,
            0.208984375
          ],
          "overlap_pair_set_accuracy": 0.22021484375,
          "source_swap_rate_given_pair_recovered": 0.10254083484573502,
          "loss": 0.82863624766469
        }
      },
      "high_overlap": {
        "examples": 191,
        "digit_accuracy": 0.6687027341477604,
        "all_labeled_correct": 0.02617801047120419
      },
      "trainable_parameters": 1726228,
      "inference_parameters": 1128586,
      "zero_accuracy": 0.10004340277777779,
      "wrong_context_accuracy": 0.1028103298611111
    },
    {
      "encoder": "speech",
      "kind": "mix_post",
      "mode": "B2",
      "budget": 8,
      "group": "main",
      "native_frames": 190,
      "native_dimension": 1024,
      "metrics_mean": {
        "digit_accuracy": 0.6612955729166666,
        "all_labeled_correct": 0.036458333333333336,
        "overlap_digit_accuracy": 0.513671875,
        "source_A_all_correct": 0.2630208333333333,
        "source_B_all_correct": 0.2607421875,
        "overlap_pair_set_accuracy": 0.2952473958333333,
        "source_swap_rate_given_pair_recovered": 0.1486830426081786
      },
      "metrics_seed_sd": {
        "digit_accuracy": 0.008019977210126915,
        "all_labeled_correct": 0.01869124638015051,
        "overlap_digit_accuracy": 0.012575019784839757,
        "source_A_all_correct": 0.013718299157360336,
        "source_B_all_correct": 0.0068359375,
        "overlap_pair_set_accuracy": 0.11390287473655054,
        "source_swap_rate_given_pair_recovered": 0.07811157813011389
      },
      "per_seed": {
        "0": {
          "digit_accuracy": 0.6622721354166666,
          "all_labeled_correct": 0.0419921875,
          "digit_accuracy_by_position": [
            0.9599609375,
            0.525390625,
            0.50146484375
          ],
          "overlap_digit_accuracy": 0.513427734375,
          "source_A_all_correct": 0.26171875,
          "source_B_all_correct": 0.2578125,
          "pair_set_accuracy_by_position": [
            0.921875,
            0.3017578125,
            0.380859375
          ],
          "overlap_pair_set_accuracy": 0.34130859375,
          "source_swap_rate_given_pair_recovered": 0.18168389955686853,
          "loss": 0.8804376535117626
        },
        "1": {
          "digit_accuracy": 0.6687825520833334,
          "all_labeled_correct": 0.015625,
          "digit_accuracy_by_position": [
            0.95361328125,
            0.533203125,
            0.51953125
          ],
          "overlap_digit_accuracy": 0.5263671875,
          "source_A_all_correct": 0.27734375,
          "source_B_all_correct": 0.2685546875,
          "pair_set_accuracy_by_position": [
            0.9111328125,
            0.185546875,
            0.1455078125
          ],
          "overlap_pair_set_accuracy": 0.16552734375,
          "source_swap_rate_given_pair_recovered": 0.059487179487179485,
          "loss": 0.8207092955708504
        },
        "2": {
          "digit_accuracy": 0.65283203125,
          "all_labeled_correct": 0.0517578125,
          "digit_accuracy_by_position": [
            0.9560546875,
            0.5009765625,
            0.50146484375
          ],
          "overlap_digit_accuracy": 0.501220703125,
          "source_A_all_correct": 0.25,
          "source_B_all_correct": 0.255859375,
          "pair_set_accuracy_by_position": [
            0.9130859375,
            0.4521484375,
            0.3056640625
          ],
          "overlap_pair_set_accuracy": 0.37890625,
          "source_swap_rate_given_pair_recovered": 0.2048780487804878,
          "loss": 0.9136145487427711
        }
      },
      "high_overlap": {
        "examples": 191,
        "digit_accuracy": 0.6704479348458406,
        "all_labeled_correct": 0.029668411867364745
      },
      "trainable_parameters": 1726484,
      "inference_parameters": 1195402,
      "zero_accuracy": 0.10069444444444446,
      "wrong_context_accuracy": 0.10508897569444443
    },
    {
      "encoder": "speech",
      "kind": "mix_post",
      "mode": "B0",
      "budget": 4,
      "group": "main",
      "native_frames": 190,
      "native_dimension": 1024,
      "metrics_mean": {
        "digit_accuracy": 0.658962673611111,
        "all_labeled_correct": 0.025390625,
        "overlap_digit_accuracy": 0.5128580729166666,
        "source_A_all_correct": 0.2727864583333333,
        "source_B_all_correct": 0.2750651041666667,
        "overlap_pair_set_accuracy": 0.22705078125,
        "source_swap_rate_given_pair_recovered": 0.1113494723854498
      },
      "metrics_seed_sd": {
        "digit_accuracy": 0.011750730980274505,
        "all_labeled_correct": 0.014778072217208551,
        "overlap_digit_accuracy": 0.017422018235876528,
        "source_A_all_correct": 0.022318957964091078,
        "source_B_all_correct": 0.0156351692168266,
        "overlap_pair_set_accuracy": 0.0720922090508743,
        "source_swap_rate_given_pair_recovered": 0.044924122907805494
      },
      "per_seed": {
        "0": {
          "digit_accuracy": 0.6632486979166666,
          "all_labeled_correct": 0.013671875,
          "digit_accuracy_by_position": [
            0.94873046875,
            0.52294921875,
            0.51806640625
          ],
          "overlap_digit_accuracy": 0.5205078125,
          "source_A_all_correct": 0.2841796875,
          "source_B_all_correct": 0.2744140625,
          "pair_set_accuracy_by_position": [
            0.8994140625,
            0.15625,
            0.173828125
          ],
          "overlap_pair_set_accuracy": 0.1650390625,
          "source_swap_rate_given_pair_recovered": 0.06618407445708377,
          "loss": 0.8566187471151352
        },
        "1": {
          "digit_accuracy": 0.66796875,
          "all_labeled_correct": 0.0419921875,
          "digit_accuracy_by_position": [
            0.95361328125,
            0.5302734375,
            0.52001953125
          ],
          "overlap_digit_accuracy": 0.525146484375,
          "source_A_all_correct": 0.287109375,
          "source_B_all_correct": 0.291015625,
          "pair_set_accuracy_by_position": [
            0.908203125,
            0.36328125,
            0.2490234375
          ],
          "overlap_pair_set_accuracy": 0.30615234375,
          "source_swap_rate_given_pair_recovered": 0.15602836879432624,
          "loss": 0.9077850170433521
        },
        "2": {
          "digit_accuracy": 0.6456705729166666,
          "all_labeled_correct": 0.0205078125,
          "digit_accuracy_by_position": [
            0.951171875,
            0.49560546875,
            0.490234375
          ],
          "overlap_digit_accuracy": 0.492919921875,
          "source_A_all_correct": 0.2470703125,
          "source_B_all_correct": 0.259765625,
          "pair_set_accuracy_by_position": [
            0.908203125,
            0.2509765625,
            0.1689453125
          ],
          "overlap_pair_set_accuracy": 0.2099609375,
          "source_swap_rate_given_pair_recovered": 0.11183597390493942,
          "loss": 1.064897708594799
        }
      },
      "high_overlap": {
        "examples": 191,
        "digit_accuracy": 0.6620127981384528,
        "all_labeled_correct": 0.02617801047120419
      },
      "trainable_parameters": 1128074,
      "inference_parameters": 1128074,
      "zero_accuracy": 0.09917534722222221,
      "wrong_context_accuracy": 0.10215928819444443
    },
    {
      "encoder": "speech",
      "kind": "mix_post",
      "mode": "B1",
      "budget": 4,
      "group": "main",
      "native_frames": 190,
      "native_dimension": 1024,
      "metrics_mean": {
        "digit_accuracy": 0.6575520833333334,
        "all_labeled_correct": 0.018229166666666668,
        "overlap_digit_accuracy": 0.51416015625,
        "source_A_all_correct": 0.2594401041666667,
        "source_B_all_correct": 0.2578125,
        "overlap_pair_set_accuracy": 0.20231119791666666,
        "source_swap_rate_given_pair_recovered": 0.0974449113165607
      },
      "metrics_seed_sd": {
        "digit_accuracy": 0.0025423989830425,
        "all_labeled_correct": 0.007198354292804681,
        "overlap_digit_accuracy": 0.00944606548933257,
        "source_A_all_correct": 0.009073801995290596,
        "source_B_all_correct": 0.022075497178627567,
        "overlap_pair_set_accuracy": 0.051983801788603436,
        "source_swap_rate_given_pair_recovered": 0.04145906442645067
      },
      "per_seed": {
        "0": {
          "digit_accuracy": 0.6591796875,
          "all_labeled_correct": 0.0126953125,
          "digit_accuracy_by_position": [
            0.93359375,
            0.5302734375,
            0.513671875
          ],
          "overlap_digit_accuracy": 0.52197265625,
          "source_A_all_correct": 0.263671875,
          "source_B_all_correct": 0.2724609375,
          "pair_set_accuracy_by_position": [
            0.8779296875,
            0.1865234375,
            0.1513671875
          ],
          "overlap_pair_set_accuracy": 0.1689453125,
          "source_swap_rate_given_pair_recovered": 0.07789473684210527,
          "loss": 0.8412613272666931
        },
        "1": {
          "digit_accuracy": 0.6546223958333334,
          "all_labeled_correct": 0.015625,
          "digit_accuracy_by_position": [
            0.95654296875,
            0.505859375,
            0.50146484375
          ],
          "overlap_digit_accuracy": 0.503662109375,
          "source_A_all_correct": 0.265625,
          "source_B_all_correct": 0.232421875,
          "pair_set_accuracy_by_position": [
            0.9189453125,
            0.2080078125,
            0.1435546875
          ],
          "overlap_pair_set_accuracy": 0.17578125,
          "source_swap_rate_given_pair_recovered": 0.06937561942517344,
          "loss": 0.9715082198381424
        },
        "2": {
          "digit_accuracy": 0.6588541666666666,
          "all_labeled_correct": 0.0263671875,
          "digit_accuracy_by_position": [
            0.94287109375,
            0.53076171875,
            0.5029296875
          ],
          "overlap_digit_accuracy": 0.516845703125,
          "source_A_all_correct": 0.2490234375,
          "source_B_all_correct": 0.2685546875,
          "pair_set_accuracy_by_position": [
            0.8935546875,
            0.2890625,
            0.2353515625
          ],
          "overlap_pair_set_accuracy": 0.26220703125,
          "source_swap_rate_given_pair_recovered": 0.14506437768240343,
          "loss": 0.909501139074564
        }
      },
      "high_overlap": {
        "examples": 191,
        "digit_accuracy": 0.6570680628272253,
        "all_labeled_correct": 0.027923211169284468
      },
      "trainable_parameters": 1725716,
      "inference_parameters": 1128074,
      "zero_accuracy": 0.10259331597222222,
      "wrong_context_accuracy": 0.1037326388888889
    },
    {
      "encoder": "speech",
      "kind": "mix_post",
      "mode": "B2",
      "budget": 4,
      "group": "main",
      "native_frames": 190,
      "native_dimension": 1024,
      "metrics_mean": {
        "digit_accuracy": 0.6647677951388888,
        "all_labeled_correct": 0.013346354166666666,
        "overlap_digit_accuracy": 0.5177408854166666,
        "source_A_all_correct": 0.2747395833333333,
        "source_B_all_correct": 0.2711588541666667,
        "overlap_pair_set_accuracy": 0.16048177083333334,
        "source_swap_rate_given_pair_recovered": 0.0555120476876004
      },
      "metrics_seed_sd": {
        "digit_accuracy": 0.004319544118785402,
        "all_labeled_correct": 0.003946730355788458,
        "overlap_digit_accuracy": 0.0048909437504286194,
        "source_A_all_correct": 0.004403564211741108,
        "source_B_all_correct": 0.005886439231779012,
        "overlap_pair_set_accuracy": 0.025523303684381635,
        "source_swap_rate_given_pair_recovered": 0.025411861166518935
      },
      "per_seed": {
        "0": {
          "digit_accuracy": 0.6650390625,
          "all_labeled_correct": 0.015625,
          "digit_accuracy_by_position": [
            0.958984375,
            0.521484375,
            0.5146484375
          ],
          "overlap_digit_accuracy": 0.51806640625,
          "source_A_all_correct": 0.279296875,
          "source_B_all_correct": 0.27734375,
          "pair_set_accuracy_by_position": [
            0.9189453125,
            0.197265625,
            0.1689453125
          ],
          "overlap_pair_set_accuracy": 0.18310546875,
          "source_swap_rate_given_pair_recovered": 0.08047105004906771,
          "loss": 0.9110602848231792
        },
        "1": {
          "digit_accuracy": 0.6603190104166666,
          "all_labeled_correct": 0.0087890625,
          "digit_accuracy_by_position": [
            0.95556640625,
            0.517578125,
            0.5078125
          ],
          "overlap_digit_accuracy": 0.5126953125,
          "source_A_all_correct": 0.2744140625,
          "source_B_all_correct": 0.265625,
          "pair_set_accuracy_by_position": [
            0.9130859375,
            0.1494140625,
            0.1162109375
          ],
          "overlap_pair_set_accuracy": 0.1328125,
          "source_swap_rate_given_pair_recovered": 0.02967032967032967,
          "loss": 0.9067651592195034
        },
        "2": {
          "digit_accuracy": 0.6689453125,
          "all_labeled_correct": 0.015625,
          "digit_accuracy_by_position": [
            0.9619140625,
            0.52490234375,
            0.52001953125
          ],
          "overlap_digit_accuracy": 0.5224609375,
          "source_A_all_correct": 0.2705078125,
          "source_B_all_correct": 0.2705078125,
          "pair_set_accuracy_by_position": [
            0.92578125,
            0.197265625,
            0.1337890625
          ],
          "overlap_pair_set_accuracy": 0.16552734375,
          "source_swap_rate_given_pair_recovered": 0.05639476334340383,
          "loss": 0.8814331628382206
        }
      },
      "high_overlap": {
        "examples": 191,
        "digit_accuracy": 0.659976730657359,
        "all_labeled_correct": 0.020942408376963356
      },
      "trainable_parameters": 1725972,
      "inference_parameters": 1194890,
      "zero_accuracy": 0.10199652777777779,
      "wrong_context_accuracy": 0.10367838541666667
    },
    {
      "encoder": "encodec_low",
      "kind": "mix_post",
      "mode": "B0",
      "budget": 8,
      "group": "quantization",
      "native_frames": 285,
      "native_dimension": 128,
      "metrics_mean": {
        "digit_accuracy": 0.5751410590277778,
        "all_labeled_correct": 0.005208333333333333,
        "overlap_digit_accuracy": 0.443359375,
        "source_A_all_correct": 0.1923828125,
        "source_B_all_correct": 0.18489583333333334,
        "overlap_pair_set_accuracy": 0.11376953125,
        "source_swap_rate_given_pair_recovered": 0.03649173993120173
      },
      "metrics_seed_sd": {
        "digit_accuracy": 0.01701164317285587,
        "all_labeled_correct": 0.000563818622255494,
        "overlap_digit_accuracy": 0.010160474632170319,
        "source_A_all_correct": 0.007627196949127592,
        "source_B_all_correct": 0.011444268119301396,
        "overlap_pair_set_accuracy": 0.0,
        "source_swap_rate_given_pair_recovered": 0.000758059693864919
      },
      "per_seed": {
        "0": {
          "digit_accuracy": 0.5852864583333334,
          "all_labeled_correct": 0.0048828125,
          "digit_accuracy_by_position": [
            0.8564453125,
            0.44873046875,
            0.45068359375
          ],
          "overlap_digit_accuracy": 0.44970703125,
          "source_A_all_correct": 0.197265625,
          "source_B_all_correct": 0.189453125,
          "pair_set_accuracy_by_position": [
            0.740234375,
            0.1201171875,
            0.107421875
          ],
          "overlap_pair_set_accuracy": 0.11376953125,
          "source_swap_rate_given_pair_recovered": 0.036935704514363885,
          "loss": 1.176816575229168
        },
        "1": {
          "digit_accuracy": 0.5846354166666666,
          "all_labeled_correct": 0.005859375,
          "digit_accuracy_by_position": [
            0.8564453125,
            0.4541015625,
            0.443359375
          ],
          "overlap_digit_accuracy": 0.44873046875,
          "source_A_all_correct": 0.1962890625,
          "source_B_all_correct": 0.193359375,
          "pair_set_accuracy_by_position": [
            0.73828125,
            0.119140625,
            0.1083984375
          ],
          "overlap_pair_set_accuracy": 0.11376953125,
          "source_swap_rate_given_pair_recovered": 0.03561643835616438,
          "loss": 1.1844939813017845
        },
        "2": {
          "digit_accuracy": 0.5555013020833334,
          "all_labeled_correct": 0.0048828125,
          "digit_accuracy_by_position": [
            0.80322265625,
            0.439453125,
            0.423828125
          ],
          "overlap_digit_accuracy": 0.431640625,
          "source_A_all_correct": 0.18359375,
          "source_B_all_correct": 0.171875,
          "pair_set_accuracy_by_position": [
            0.6484375,
            0.1220703125,
            0.10546875
          ],
          "overlap_pair_set_accuracy": 0.11376953125,
          "source_swap_rate_given_pair_recovered": 0.036923076923076927,
          "loss": 1.263449840247631
        }
      },
      "high_overlap": {
        "examples": 191,
        "digit_accuracy": 0.5863874345549739,
        "all_labeled_correct": 0.010471204188481678
      },
      "trainable_parameters": 1012106,
      "inference_parameters": 1012106,
      "zero_accuracy": 0.09521484375,
      "wrong_context_accuracy": 0.10210503472222222
    },
    {
      "encoder": "encodec_low",
      "kind": "mix_post",
      "mode": "B2",
      "budget": 8,
      "group": "quantization",
      "native_frames": 285,
      "native_dimension": 128,
      "metrics_mean": {
        "digit_accuracy": 0.5709635416666666,
        "all_labeled_correct": 0.004557291666666667,
        "overlap_digit_accuracy": 0.440673828125,
        "source_A_all_correct": 0.17545572916666666,
        "source_B_all_correct": 0.1806640625,
        "overlap_pair_set_accuracy": 0.12044270833333333,
        "source_swap_rate_given_pair_recovered": 0.0453422098256406
      },
      "metrics_seed_sd": {
        "digit_accuracy": 0.006841747902663966,
        "all_labeled_correct": 0.003139209232094061,
        "overlap_digit_accuracy": 0.007080078125,
        "source_A_all_correct": 0.012053065482795323,
        "source_B_all_correct": 0.004475171577105312,
        "overlap_pair_set_accuracy": 0.003101002422405216,
        "source_swap_rate_given_pair_recovered": 0.006542770916001374
      },
      "per_seed": {
        "0": {
          "digit_accuracy": 0.57861328125,
          "all_labeled_correct": 0.0068359375,
          "digit_accuracy_by_position": [
            0.84033203125,
            0.43798828125,
            0.45751953125
          ],
          "overlap_digit_accuracy": 0.44775390625,
          "source_A_all_correct": 0.1787109375,
          "source_B_all_correct": 0.1767578125,
          "pair_set_accuracy_by_position": [
            0.7138671875,
            0.1318359375,
            0.1162109375
          ],
          "overlap_pair_set_accuracy": 0.1240234375,
          "source_swap_rate_given_pair_recovered": 0.049315068493150684,
          "loss": 1.203380562365055
        },
        "1": {
          "digit_accuracy": 0.5654296875,
          "all_labeled_correct": 0.0009765625,
          "digit_accuracy_by_position": [
            0.8291015625,
            0.43017578125,
            0.43701171875
          ],
          "overlap_digit_accuracy": 0.43359375,
          "source_A_all_correct": 0.162109375,
          "source_B_all_correct": 0.185546875,
          "pair_set_accuracy_by_position": [
            0.6875,
            0.1201171875,
            0.1171875
          ],
          "overlap_pair_set_accuracy": 0.11865234375,
          "source_swap_rate_given_pair_recovered": 0.04892086330935252,
          "loss": 1.2481012418866158
        },
        "2": {
          "digit_accuracy": 0.56884765625,
          "all_labeled_correct": 0.005859375,
          "digit_accuracy_by_position": [
            0.8251953125,
            0.4423828125,
            0.43896484375
          ],
          "overlap_digit_accuracy": 0.440673828125,
          "source_A_all_correct": 0.185546875,
          "source_B_all_correct": 0.1796875,
          "pair_set_accuracy_by_position": [
            0.689453125,
            0.1259765625,
            0.111328125
          ],
          "overlap_pair_set_accuracy": 0.11865234375,
          "source_swap_rate_given_pair_recovered": 0.0377906976744186,
          "loss": 1.2302938625216484
        }
      },
      "high_overlap": {
        "examples": 191,
        "digit_accuracy": 0.5840605002908669,
        "all_labeled_correct": 0.006980802792321117
      },
      "trainable_parameters": 1610004,
      "inference_parameters": 1078922,
      "zero_accuracy": 0.10248480902777779,
      "wrong_context_accuracy": 0.10188802083333333
    },
    {
      "encoder": "speech_low",
      "kind": "mix_post",
      "mode": "B0",
      "budget": 8,
      "group": "quantization",
      "native_frames": 190,
      "native_dimension": 1024,
      "metrics_mean": {
        "digit_accuracy": 0.6378580729166666,
        "all_labeled_correct": 0.0146484375,
        "overlap_digit_accuracy": 0.4869791666666667,
        "source_A_all_correct": 0.24934895833333334,
        "source_B_all_correct": 0.23014322916666666,
        "overlap_pair_set_accuracy": 0.16927083333333334,
        "source_swap_rate_given_pair_recovered": 0.07815737981026029
      },
      "metrics_seed_sd": {
        "digit_accuracy": 0.0056311340794291,
        "all_labeled_correct": 0.0016914558667664816,
        "overlap_digit_accuracy": 0.00809845525195113,
        "source_A_all_correct": 0.002457628396898031,
        "source_B_all_correct": 0.009781887500857239,
        "overlap_pair_set_accuracy": 0.023378084954941918,
        "source_swap_rate_given_pair_recovered": 0.030278567587049665
      },
      "per_seed": {
        "0": {
          "digit_accuracy": 0.6398111979166666,
          "all_labeled_correct": 0.013671875,
          "digit_accuracy_by_position": [
            0.94921875,
            0.4853515625,
            0.48486328125
          ],
          "overlap_digit_accuracy": 0.485107421875,
          "source_A_all_correct": 0.251953125,
          "source_B_all_correct": 0.22265625,
          "pair_set_accuracy_by_position": [
            0.904296875,
            0.208984375,
            0.14453125
          ],
          "overlap_pair_set_accuracy": 0.1767578125,
          "source_swap_rate_given_pair_recovered": 0.08773678963110668,
          "loss": 1.0948105715215206
        },
        "1": {
          "digit_accuracy": 0.6422526041666666,
          "all_labeled_correct": 0.013671875,
          "digit_accuracy_by_position": [
            0.93505859375,
            0.5029296875,
            0.48876953125
          ],
          "overlap_digit_accuracy": 0.495849609375,
          "source_A_all_correct": 0.2490234375,
          "source_B_all_correct": 0.2412109375,
          "pair_set_accuracy_by_position": [
            0.87890625,
            0.15234375,
            0.1337890625
          ],
          "overlap_pair_set_accuracy": 0.14306640625,
          "source_swap_rate_given_pair_recovered": 0.04424778761061947,
          "loss": 1.0465070120990276
        },
        "2": {
          "digit_accuracy": 0.6315104166666666,
          "all_labeled_correct": 0.0166015625,
          "digit_accuracy_by_position": [
            0.9345703125,
            0.4892578125,
            0.470703125
          ],
          "overlap_digit_accuracy": 0.47998046875,
          "source_A_all_correct": 0.2470703125,
          "source_B_all_correct": 0.2265625,
          "pair_set_accuracy_by_position": [
            0.875,
            0.197265625,
            0.1787109375
          ],
          "overlap_pair_set_accuracy": 0.18798828125,
          "source_swap_rate_given_pair_recovered": 0.10248756218905472,
          "loss": 1.147137738764286
        }
      },
      "high_overlap": {
        "examples": 191,
        "digit_accuracy": 0.6326352530541012,
        "all_labeled_correct": 0.027923211169284468
      },
      "trainable_parameters": 1128586,
      "inference_parameters": 1128586,
      "zero_accuracy": 0.10373263888888888,
      "wrong_context_accuracy": 0.1056857638888889
    },
    {
      "encoder": "speech_low",
      "kind": "mix_post",
      "mode": "B2",
      "budget": 8,
      "group": "quantization",
      "native_frames": 190,
      "native_dimension": 1024,
      "metrics_mean": {
        "digit_accuracy": 0.6564670138888888,
        "all_labeled_correct": 0.010091145833333334,
        "overlap_digit_accuracy": 0.5103352864583334,
        "source_A_all_correct": 0.2659505208333333,
        "source_B_all_correct": 0.2607421875,
        "overlap_pair_set_accuracy": 0.12548828125,
        "source_swap_rate_given_pair_recovered": 0.025691033741333424
      },
      "metrics_seed_sd": {
        "digit_accuracy": 0.0069746842548220655,
        "all_labeled_correct": 0.0005638186222554939,
        "overlap_digit_accuracy": 0.010681907990383684,
        "source_A_all_correct": 0.008189938558209067,
        "source_B_all_correct": 0.009765625,
        "overlap_pair_set_accuracy": 0.003049315428905468,
        "source_swap_rate_given_pair_recovered": 0.00729821602298776
      },
      "per_seed": {
        "0": {
          "digit_accuracy": 0.6544596354166666,
          "all_labeled_correct": 0.0107421875,
          "digit_accuracy_by_position": [
            0.947265625,
            0.5087890625,
            0.50732421875
          ],
          "overlap_digit_accuracy": 0.508056640625,
          "source_A_all_correct": 0.2607421875,
          "source_B_all_correct": 0.2607421875,
          "pair_set_accuracy_by_position": [
            0.8974609375,
            0.1416015625,
            0.1162109375
          ],
          "overlap_pair_set_accuracy": 0.12890625,
          "source_swap_rate_given_pair_recovered": 0.03374578177727784,
          "loss": 0.9289082512259483
        },
        "1": {
          "digit_accuracy": 0.6642252604166666,
          "all_labeled_correct": 0.009765625,
          "digit_accuracy_by_position": [
            0.94873046875,
            0.52734375,
            0.5166015625
          ],
          "overlap_digit_accuracy": 0.52197265625,
          "source_A_all_correct": 0.275390625,
          "source_B_all_correct": 0.2705078125,
          "pair_set_accuracy_by_position": [
            0.8974609375,
            0.1220703125,
            0.1240234375
          ],
          "overlap_pair_set_accuracy": 0.123046875,
          "source_swap_rate_given_pair_recovered": 0.01951779563719862,
          "loss": 0.8848456777632236
        },
        "2": {
          "digit_accuracy": 0.6507161458333334,
          "all_labeled_correct": 0.009765625,
          "digit_accuracy_by_position": [
            0.9501953125,
            0.5048828125,
            0.4970703125
          ],
          "overlap_digit_accuracy": 0.5009765625,
          "source_A_all_correct": 0.26171875,
          "source_B_all_correct": 0.2509765625,
          "pair_set_accuracy_by_position": [
            0.90234375,
            0.1376953125,
            0.111328125
          ],
          "overlap_pair_set_accuracy": 0.12451171875,
          "source_swap_rate_given_pair_recovered": 0.023809523809523808,
          "loss": 0.9522134326398373
        }
      },
      "high_overlap": {
        "examples": 191,
        "digit_accuracy": 0.6576497963932518,
        "all_labeled_correct": 0.020942408376963356
      },
      "trainable_parameters": 1726484,
      "inference_parameters": 1195402,
      "zero_accuracy": 0.10139973958333333,
      "wrong_context_accuracy": 0.10465494791666667
    },
    {
      "encoder": "controls",
      "kind": "mel20",
      "mode": "B0",
      "budget": 16,
      "group": "frontend",
      "native_frames": 76,
      "native_dimension": 80,
      "metrics_mean": {
        "digit_accuracy": 0.5599500868055555,
        "all_labeled_correct": 0.005208333333333333,
        "overlap_digit_accuracy": 0.426513671875,
        "source_A_all_correct": 0.1767578125,
        "source_B_all_correct": 0.181640625,
        "overlap_pair_set_accuracy": 0.10611979166666667,
        "source_swap_rate_given_pair_recovered": 0.036903143761595585
      },
      "metrics_seed_sd": {
        "digit_accuracy": 0.022776186610938144,
        "all_labeled_correct": 0.001491723859035104,
        "overlap_digit_accuracy": 0.03380884903183878,
        "source_A_all_correct": 0.04060668532478865,
        "source_B_all_correct": 0.039499508625306025,
        "overlap_pair_set_accuracy": 0.005221033506622864,
        "source_swap_rate_given_pair_recovered": 0.012733538834125247
      },
      "per_seed": {
        "0": {
          "digit_accuracy": 0.5504557291666666,
          "all_labeled_correct": 0.00390625,
          "digit_accuracy_by_position": [
            0.814453125,
            0.40576171875,
            0.43115234375
          ],
          "overlap_digit_accuracy": 0.41845703125,
          "source_A_all_correct": 0.162109375,
          "source_B_all_correct": 0.166015625,
          "pair_set_accuracy_by_position": [
            0.6796875,
            0.107421875,
            0.1025390625
          ],
          "overlap_pair_set_accuracy": 0.10498046875,
          "source_swap_rate_given_pair_recovered": 0.03582089552238806,
          "loss": 1.3786250352859497
        },
        "1": {
          "digit_accuracy": 0.5859375,
          "all_labeled_correct": 0.0068359375,
          "digit_accuracy_by_position": [
            0.83056640625,
            0.4560546875,
            0.47119140625
          ],
          "overlap_digit_accuracy": 0.463623046875,
          "source_A_all_correct": 0.22265625,
          "source_B_all_correct": 0.2265625,
          "pair_set_accuracy_by_position": [
            0.7099609375,
            0.1103515625,
            0.11328125
          ],
          "overlap_pair_set_accuracy": 0.11181640625,
          "source_swap_rate_given_pair_recovered": 0.024745269286754003,
          "loss": 1.2198815420269966
        },
        "2": {
          "digit_accuracy": 0.54345703125,
          "all_labeled_correct": 0.0048828125,
          "digit_accuracy_by_position": [
            0.83544921875,
            0.38330078125,
            0.41162109375
          ],
          "overlap_digit_accuracy": 0.3974609375,
          "source_A_all_correct": 0.1455078125,
          "source_B_all_correct": 0.15234375,
          "pair_set_accuracy_by_position": [
            0.7021484375,
            0.10546875,
            0.09765625
          ],
          "overlap_pair_set_accuracy": 0.1015625,
          "source_swap_rate_given_pair_recovered": 0.050143266475644696,
          "loss": 1.5278644263744354
        }
      },
      "high_overlap": {
        "examples": 191,
        "digit_accuracy": 0.559627690517743,
        "all_labeled_correct": 0.010471204188481678
      },
      "trainable_parameters": 1006890,
      "inference_parameters": 1006890,
      "zero_accuracy": 0.1027560763888889,
      "wrong_context_accuracy": 0.1022677951388889
    },
    {
      "encoder": "controls",
      "kind": "mel20",
      "mode": "B0",
      "budget": 8,
      "group": "frontend",
      "native_frames": 76,
      "native_dimension": 80,
      "metrics_mean": {
        "digit_accuracy": 0.5588107638888888,
        "all_labeled_correct": 0.005533854166666667,
        "overlap_digit_accuracy": 0.4263509114583333,
        "source_A_all_correct": 0.16796875,
        "source_B_all_correct": 0.18131510416666666,
        "overlap_pair_set_accuracy": 0.103515625,
        "source_swap_rate_given_pair_recovered": 0.03232172713822378
      },
      "metrics_seed_sd": {
        "digit_accuracy": 0.008068277536901567,
        "all_labeled_correct": 0.0029834477180702085,
        "overlap_digit_accuracy": 0.012040696172093834,
        "source_A_all_correct": 0.0067658234670659265,
        "source_B_all_correct": 0.004510548978043952,
        "overlap_pair_set_accuracy": 0.006098630857810936,
        "source_swap_rate_given_pair_recovered": 0.007675947456638698
      },
      "per_seed": {
        "0": {
          "digit_accuracy": 0.5602213541666666,
          "all_labeled_correct": 0.0087890625,
          "digit_accuracy_by_position": [
            0.8330078125,
            0.4150390625,
            0.4326171875
          ],
          "overlap_digit_accuracy": 0.423828125,
          "source_A_all_correct": 0.171875,
          "source_B_all_correct": 0.1865234375,
          "pair_set_accuracy_by_position": [
            0.7041015625,
            0.1123046875,
            0.1083984375
          ],
          "overlap_pair_set_accuracy": 0.1103515625,
          "source_swap_rate_given_pair_recovered": 0.04084507042253521,
          "loss": 1.3620025143027306
        },
        "1": {
          "digit_accuracy": 0.5501302083333334,
          "all_labeled_correct": 0.0029296875,
          "digit_accuracy_by_position": [
            0.81884765625,
            0.41259765625,
            0.4189453125
          ],
          "overlap_digit_accuracy": 0.415771484375,
          "source_A_all_correct": 0.16015625,
          "source_B_all_correct": 0.1787109375,
          "pair_set_accuracy_by_position": [
            0.6845703125,
            0.1044921875,
            0.0927734375
          ],
          "overlap_pair_set_accuracy": 0.0986328125,
          "source_swap_rate_given_pair_recovered": 0.030165912518853696,
          "loss": 1.3914300054311752
        },
        "2": {
          "digit_accuracy": 0.5660807291666666,
          "all_labeled_correct": 0.0048828125,
          "digit_accuracy_by_position": [
            0.8193359375,
            0.43310546875,
            0.44580078125
          ],
          "overlap_digit_accuracy": 0.439453125,
          "source_A_all_correct": 0.171875,
          "source_B_all_correct": 0.1787109375,
          "pair_set_accuracy_by_position": [
            0.677734375,
            0.103515625,
            0.099609375
          ],
          "overlap_pair_set_accuracy": 0.1015625,
          "source_swap_rate_given_pair_recovered": 0.025954198473282442,
          "loss": 1.297888234257698
        }
      },
      "high_overlap": {
        "examples": 191,
        "digit_accuracy": 0.5549738219895287,
        "all_labeled_correct": 0.010471204188481678
      },
      "trainable_parameters": 1005866,
      "inference_parameters": 1005866,
      "zero_accuracy": 0.0978732638888889,
      "wrong_context_accuracy": 0.10053168402777779
    },
    {
      "encoder": "controls",
      "kind": "mel20",
      "mode": "B0",
      "budget": 4,
      "group": "frontend",
      "native_frames": 76,
      "native_dimension": 80,
      "metrics_mean": {
        "digit_accuracy": 0.5539822048611112,
        "all_labeled_correct": 0.005208333333333333,
        "overlap_digit_accuracy": 0.425537109375,
        "source_A_all_correct": 0.169921875,
        "source_B_all_correct": 0.17024739583333334,
        "overlap_pair_set_accuracy": 0.10400390625,
        "source_swap_rate_given_pair_recovered": 0.029327952220135175
      },
      "metrics_seed_sd": {
        "digit_accuracy": 0.008270941395431315,
        "all_labeled_correct": 0.001491723859035104,
        "overlap_digit_accuracy": 0.01460156890068914,
        "source_A_all_correct": 0.012236293052872722,
        "source_B_all_correct": 0.020700668093209175,
        "overlap_pair_set_accuracy": 0.0021283686247757197,
        "source_swap_rate_given_pair_recovered": 0.0005564561492355684
      },
      "per_seed": {
        "0": {
          "digit_accuracy": 0.5634765625,
          "all_labeled_correct": 0.0068359375,
          "digit_accuracy_by_position": [
            0.8056640625,
            0.43701171875,
            0.44775390625
          ],
          "overlap_digit_accuracy": 0.4423828125,
          "source_A_all_correct": 0.1826171875,
          "source_B_all_correct": 0.1923828125,
          "pair_set_accuracy_by_position": [
            0.6533203125,
            0.1083984375,
            0.1025390625
          ],
          "overlap_pair_set_accuracy": 0.10546875,
          "source_swap_rate_given_pair_recovered": 0.02996845425867508,
          "loss": 1.3058092892169952
        },
        "1": {
          "digit_accuracy": 0.54833984375,
          "all_labeled_correct": 0.0048828125,
          "digit_accuracy_by_position": [
            0.8095703125,
            0.419921875,
            0.41552734375
          ],
          "overlap_digit_accuracy": 0.417724609375,
          "source_A_all_correct": 0.158203125,
          "source_B_all_correct": 0.1669921875,
          "pair_set_accuracy_by_position": [
            0.6669921875,
            0.119140625,
            0.0908203125
          ],
          "overlap_pair_set_accuracy": 0.10498046875,
          "source_swap_rate_given_pair_recovered": 0.028963414634146343,
          "loss": 1.430920459330082
        },
        "2": {
          "digit_accuracy": 0.5501302083333334,
          "all_labeled_correct": 0.00390625,
          "digit_accuracy_by_position": [
            0.8173828125,
            0.408203125,
            0.4248046875
          ],
          "overlap_digit_accuracy": 0.41650390625,
          "source_A_all_correct": 0.1689453125,
          "source_B_all_correct": 0.1513671875,
          "pair_set_accuracy_by_position": [
            0.671875,
            0.107421875,
            0.095703125
          ],
          "overlap_pair_set_accuracy": 0.1015625,
          "source_swap_rate_given_pair_recovered": 0.0290519877675841,
          "loss": 1.3874747902154922
        }
      },
      "high_overlap": {
        "examples": 191,
        "digit_accuracy": 0.5584642233856895,
        "all_labeled_correct": 0.013961605584642234
      },
      "trainable_parameters": 1005354,
      "inference_parameters": 1005354,
      "zero_accuracy": 0.09977213541666667,
      "wrong_context_accuracy": 0.10139973958333333
    },
    {
      "encoder": "controls",
      "kind": "dmel20",
      "mode": "B0",
      "budget": 16,
      "group": "frontend",
      "native_frames": 76,
      "native_dimension": 80,
      "metrics_mean": {
        "digit_accuracy": 0.540310329861111,
        "all_labeled_correct": 0.005533854166666667,
        "overlap_digit_accuracy": 0.40771484375,
        "source_A_all_correct": 0.15462239583333334,
        "source_B_all_correct": 0.158203125,
        "overlap_pair_set_accuracy": 0.09537760416666667,
        "source_swap_rate_given_pair_recovered": 0.020956250515755923
      },
      "metrics_seed_sd": {
        "digit_accuracy": 0.0006577883926313882,
        "all_labeled_correct": 0.000563818622255494,
        "overlap_digit_accuracy": 0.0012685919000748613,
        "source_A_all_correct": 0.010801210952498084,
        "source_B_all_correct": 0.012807497117777344,
        "overlap_pair_set_accuracy": 0.007953640444577225,
        "source_swap_rate_given_pair_recovered": 0.010675667922197532
      },
      "per_seed": {
        "0": {
          "digit_accuracy": 0.5406901041666666,
          "all_labeled_correct": 0.0048828125,
          "digit_accuracy_by_position": [
            0.80517578125,
            0.40478515625,
            0.412109375
          ],
          "overlap_digit_accuracy": 0.408447265625,
          "source_A_all_correct": 0.166015625,
          "source_B_all_correct": 0.146484375,
          "pair_set_accuracy_by_position": [
            0.6533203125,
            0.09375,
            0.08984375
          ],
          "overlap_pair_set_accuracy": 0.091796875,
          "source_swap_rate_given_pair_recovered": 0.011363636363636364,
          "loss": 1.404391847550869
        },
        "1": {
          "digit_accuracy": 0.5406901041666666,
          "all_labeled_correct": 0.005859375,
          "digit_accuracy_by_position": [
            0.80517578125,
            0.4013671875,
            0.41552734375
          ],
          "overlap_digit_accuracy": 0.408447265625,
          "source_A_all_correct": 0.1533203125,
          "source_B_all_correct": 0.15625,
          "pair_set_accuracy_by_position": [
            0.6611328125,
            0.10546875,
            0.103515625
          ],
          "overlap_pair_set_accuracy": 0.1044921875,
          "source_swap_rate_given_pair_recovered": 0.03245749613601236,
          "loss": 1.4337328746914864
        },
        "2": {
          "digit_accuracy": 0.53955078125,
          "all_labeled_correct": 0.005859375,
          "digit_accuracy_by_position": [
            0.80615234375,
            0.40771484375,
            0.40478515625
          ],
          "overlap_digit_accuracy": 0.40625,
          "source_A_all_correct": 0.14453125,
          "source_B_all_correct": 0.171875,
          "pair_set_accuracy_by_position": [
            0.6640625,
            0.087890625,
            0.091796875
          ],
          "overlap_pair_set_accuracy": 0.08984375,
          "source_swap_rate_given_pair_recovered": 0.01904761904761905,
          "loss": 1.36744736880064
        }
      },
      "high_overlap": {
        "examples": 191,
        "digit_accuracy": 0.5430482838859803,
        "all_labeled_correct": 0.012216404886561954
      },
      "trainable_parameters": 1006890,
      "inference_parameters": 1006890,
      "zero_accuracy": 0.10411241319444446,
      "wrong_context_accuracy": 0.10243055555555554
    },
    {
      "encoder": "controls",
      "kind": "dmel20",
      "mode": "B0",
      "budget": 8,
      "group": "frontend",
      "native_frames": 76,
      "native_dimension": 80,
      "metrics_mean": {
        "digit_accuracy": 0.5454644097222222,
        "all_labeled_correct": 0.004557291666666667,
        "overlap_digit_accuracy": 0.413818359375,
        "source_A_all_correct": 0.15494791666666666,
        "source_B_all_correct": 0.1669921875,
        "overlap_pair_set_accuracy": 0.10205078125,
        "source_swap_rate_given_pair_recovered": 0.03565659045963542
      },
      "metrics_seed_sd": {
        "digit_accuracy": 0.0018293961914157139,
        "all_labeled_correct": 0.002032876952603645,
        "overlap_digit_accuracy": 0.00559396447138164,
        "source_A_all_correct": 0.011444268119301396,
        "source_B_all_correct": 0.01109161786289116,
        "overlap_pair_set_accuracy": 0.014509431599710573,
        "source_swap_rate_given_pair_recovered": 0.017455512848516555
      },
      "per_seed": {
        "0": {
          "digit_accuracy": 0.5470377604166666,
          "all_labeled_correct": 0.0068359375,
          "digit_accuracy_by_position": [
            0.81591796875,
            0.41064453125,
            0.41455078125
          ],
          "overlap_digit_accuracy": 0.41259765625,
          "source_A_all_correct": 0.146484375,
          "source_B_all_correct": 0.171875,
          "pair_set_accuracy_by_position": [
            0.6787109375,
            0.1318359375,
            0.10546875
          ],
          "overlap_pair_set_accuracy": 0.11865234375,
          "source_swap_rate_given_pair_recovered": 0.05459770114942529,
          "loss": 1.4217114597558975
        },
        "1": {
          "digit_accuracy": 0.5458984375,
          "all_labeled_correct": 0.0029296875,
          "digit_accuracy_by_position": [
            0.7978515625,
            0.41015625,
            0.4296875
          ],
          "overlap_digit_accuracy": 0.419921875,
          "source_A_all_correct": 0.150390625,
          "source_B_all_correct": 0.1748046875,
          "pair_set_accuracy_by_position": [
            0.6474609375,
            0.1005859375,
            0.0908203125
          ],
          "overlap_pair_set_accuracy": 0.095703125,
          "source_swap_rate_given_pair_recovered": 0.03215434083601286,
          "loss": 1.4553973898291588
        },
        "2": {
          "digit_accuracy": 0.54345703125,
          "all_labeled_correct": 0.00390625,
          "digit_accuracy_by_position": [
            0.8125,
            0.40673828125,
            0.4111328125
          ],
          "overlap_digit_accuracy": 0.408935546875,
          "source_A_all_correct": 0.16796875,
          "source_B_all_correct": 0.154296875,
          "pair_set_accuracy_by_position": [
            0.673828125,
            0.09375,
            0.08984375
          ],
          "overlap_pair_set_accuracy": 0.091796875,
          "source_swap_rate_given_pair_recovered": 0.02021772939346812,
          "loss": 1.3990300297737122
        }
      },
      "high_overlap": {
        "examples": 191,
        "digit_accuracy": 0.5514834205933682,
        "all_labeled_correct": 0.012216404886561954
      },
      "trainable_parameters": 1005866,
      "inference_parameters": 1005866,
      "zero_accuracy": 0.10183376736111112,
      "wrong_context_accuracy": 0.09890407986111112
    },
    {
      "encoder": "controls",
      "kind": "dmel20",
      "mode": "B0",
      "budget": 4,
      "group": "frontend",
      "native_frames": 76,
      "native_dimension": 80,
      "metrics_mean": {
        "digit_accuracy": 0.5444878472222223,
        "all_labeled_correct": 0.007161458333333333,
        "overlap_digit_accuracy": 0.4197591145833333,
        "source_A_all_correct": 0.1513671875,
        "source_B_all_correct": 0.16927083333333334,
        "overlap_pair_set_accuracy": 0.10888671875,
        "source_swap_rate_given_pair_recovered": 0.038318107401792666
      },
      "metrics_seed_sd": {
        "digit_accuracy": 0.007403959248798582,
        "all_labeled_correct": 0.002032876952603645,
        "overlap_digit_accuracy": 0.011220734288831106,
        "source_A_all_correct": 0.00931581251383736,
        "source_B_all_correct": 0.01368349580532793,
        "overlap_pair_set_accuracy": 0.0027186349427880964,
        "source_swap_rate_given_pair_recovered": 0.01251136275226343
      },
      "per_seed": {
        "0": {
          "digit_accuracy": 0.552734375,
          "all_labeled_correct": 0.0078125,
          "digit_accuracy_by_position": [
            0.79345703125,
            0.4287109375,
            0.43603515625
          ],
          "overlap_digit_accuracy": 0.432373046875,
          "source_A_all_correct": 0.162109375,
          "source_B_all_correct": 0.1845703125,
          "pair_set_accuracy_by_position": [
            0.642578125,
            0.1220703125,
            0.1015625
          ],
          "overlap_pair_set_accuracy": 0.11181640625,
          "source_swap_rate_given_pair_recovered": 0.049079754601226995,
          "loss": 1.4104836285114288
        },
        "1": {
          "digit_accuracy": 0.5423177083333334,
          "all_labeled_correct": 0.0087890625,
          "digit_accuracy_by_position": [
            0.80517578125,
            0.40283203125,
            0.4189453125
          ],
          "overlap_digit_accuracy": 0.410888671875,
          "source_A_all_correct": 0.146484375,
          "source_B_all_correct": 0.1650390625,
          "pair_set_accuracy_by_position": [
            0.6552734375,
            0.115234375,
            0.1015625
          ],
          "overlap_pair_set_accuracy": 0.1083984375,
          "source_swap_rate_given_pair_recovered": 0.04128440366972477,
          "loss": 1.4657172784209251
        },
        "2": {
          "digit_accuracy": 0.5384114583333334,
          "all_labeled_correct": 0.0048828125,
          "digit_accuracy_by_position": [
            0.783203125,
            0.41259765625,
            0.41943359375
          ],
          "overlap_digit_accuracy": 0.416015625,
          "source_A_all_correct": 0.1455078125,
          "source_B_all_correct": 0.158203125,
          "pair_set_accuracy_by_position": [
            0.6240234375,
            0.1044921875,
            0.1083984375
          ],
          "overlap_pair_set_accuracy": 0.1064453125,
          "source_swap_rate_given_pair_recovered": 0.02459016393442623,
          "loss": 1.396629311144352
        }
      },
      "high_overlap": {
        "examples": 191,
        "digit_accuracy": 0.5430482838859803,
        "all_labeled_correct": 0.012216404886561954
      },
      "trainable_parameters": 1005354,
      "inference_parameters": 1005354,
      "zero_accuracy": 0.10281032986111112,
      "wrong_context_accuracy": 0.09852430555555557
    },
    {
      "encoder": "controls",
      "kind": "mel40",
      "mode": "B0",
      "budget": 16,
      "group": "frontend",
      "native_frames": 152,
      "native_dimension": 80,
      "metrics_mean": {
        "digit_accuracy": 0.54248046875,
        "all_labeled_correct": 0.00390625,
        "overlap_digit_accuracy": 0.4073079427083333,
        "source_A_all_correct": 0.15559895833333334,
        "source_B_all_correct": 0.15234375,
        "overlap_pair_set_accuracy": 0.10367838541666667,
        "source_swap_rate_given_pair_recovered": 0.03424704485263705
      },
      "metrics_seed_sd": {
        "digit_accuracy": 0.003251136776601266,
        "all_labeled_correct": 0.0009765625,
        "overlap_digit_accuracy": 0.007908548576338765,
        "source_A_all_correct": 0.006928319223239832,
        "source_B_all_correct": 0.007372885190694092,
        "overlap_pair_set_accuracy": 0.011722140351582578,
        "source_swap_rate_given_pair_recovered": 0.01539834300671432
      },
      "per_seed": {
        "0": {
          "digit_accuracy": 0.5416666666666666,
          "all_labeled_correct": 0.00390625,
          "digit_accuracy_by_position": [
            0.80224609375,
            0.39599609375,
            0.4267578125
          ],
          "overlap_digit_accuracy": 0.411376953125,
          "source_A_all_correct": 0.154296875,
          "source_B_all_correct": 0.16015625,
          "pair_set_accuracy_by_position": [
            0.65625,
            0.09375,
            0.0986328125
          ],
          "overlap_pair_set_accuracy": 0.09619140625,
          "source_swap_rate_given_pair_recovered": 0.0189873417721519,
          "loss": 1.4001074582338333
        },
        "1": {
          "digit_accuracy": 0.5460611979166666,
          "all_labeled_correct": 0.0029296875,
          "digit_accuracy_by_position": [
            0.8134765625,
            0.41259765625,
            0.412109375
          ],
          "overlap_digit_accuracy": 0.412353515625,
          "source_A_all_correct": 0.1630859375,
          "source_B_all_correct": 0.1455078125,
          "pair_set_accuracy_by_position": [
            0.6708984375,
            0.1396484375,
            0.0947265625
          ],
          "overlap_pair_set_accuracy": 0.1171875,
          "source_swap_rate_given_pair_recovered": 0.04978038067349927,
          "loss": 1.5161772593855858
        },
        "2": {
          "digit_accuracy": 0.5397135416666666,
          "all_labeled_correct": 0.0048828125,
          "digit_accuracy_by_position": [
            0.82275390625,
            0.40380859375,
            0.392578125
          ],
          "overlap_digit_accuracy": 0.398193359375,
          "source_A_all_correct": 0.1494140625,
          "source_B_all_correct": 0.1513671875,
          "pair_set_accuracy_by_position": [
            0.6826171875,
            0.1005859375,
            0.0947265625
          ],
          "overlap_pair_set_accuracy": 0.09765625,
          "source_swap_rate_given_pair_recovered": 0.033973412112259974,
          "loss": 1.457811363041401
        }
      },
      "high_overlap": {
        "examples": 191,
        "digit_accuracy": 0.537521815008726,
        "all_labeled_correct": 0.008726003490401398
      },
      "trainable_parameters": 1006890,
      "inference_parameters": 1006890,
      "zero_accuracy": 0.10248480902777779,
      "wrong_context_accuracy": 0.10107421875
    },
    {
      "encoder": "controls",
      "kind": "mel40",
      "mode": "B0",
      "budget": 8,
      "group": "frontend",
      "native_frames": 152,
      "native_dimension": 80,
      "metrics_mean": {
        "digit_accuracy": 0.5361870659722222,
        "all_labeled_correct": 0.004231770833333333,
        "overlap_digit_accuracy": 0.3976236979166667,
        "source_A_all_correct": 0.15006510416666666,
        "source_B_all_correct": 0.1435546875,
        "overlap_pair_set_accuracy": 0.10416666666666667,
        "source_swap_rate_given_pair_recovered": 0.04392825594047897
      },
      "metrics_seed_sd": {
        "digit_accuracy": 0.0022805826342213106,
        "all_labeled_correct": 0.001491723859035104,
        "overlap_digit_accuracy": 0.011719597679844864,
        "source_A_all_correct": 0.005638186222554939,
        "source_B_all_correct": 0.007627196949127592,
        "overlap_pair_set_accuracy": 0.0017147873946700423,
        "source_swap_rate_given_pair_recovered": 0.007473260747284094
      },
      "per_seed": {
        "0": {
          "digit_accuracy": 0.5343424479166666,
          "all_labeled_correct": 0.0029296875,
          "digit_accuracy_by_position": [
            0.8310546875,
            0.38232421875,
            0.3896484375
          ],
          "overlap_digit_accuracy": 0.385986328125,
          "source_A_all_correct": 0.1533203125,
          "source_B_all_correct": 0.138671875,
          "pair_set_accuracy_by_position": [
            0.6982421875,
            0.115234375,
            0.0927734375
          ],
          "overlap_pair_set_accuracy": 0.10400390625,
          "source_swap_rate_given_pair_recovered": 0.05007153075822604,
          "loss": 1.492272637784481
        },
        "1": {
          "digit_accuracy": 0.5387369791666666,
          "all_labeled_correct": 0.00390625,
          "digit_accuracy_by_position": [
            0.79736328125,
            0.40185546875,
            0.4169921875
          ],
          "overlap_digit_accuracy": 0.409423828125,
          "source_A_all_correct": 0.1533203125,
          "source_B_all_correct": 0.15234375,
          "pair_set_accuracy_by_position": [
            0.64453125,
            0.109375,
            0.095703125
          ],
          "overlap_pair_set_accuracy": 0.1025390625,
          "source_swap_rate_given_pair_recovered": 0.046104928457869634,
          "loss": 1.4480068385601044
        },
        "2": {
          "digit_accuracy": 0.5354817708333334,
          "all_labeled_correct": 0.005859375,
          "digit_accuracy_by_position": [
            0.8115234375,
            0.39892578125,
            0.39599609375
          ],
          "overlap_digit_accuracy": 0.3974609375,
          "source_A_all_correct": 0.1435546875,
          "source_B_all_correct": 0.1396484375,
          "pair_set_accuracy_by_position": [
            0.6708984375,
            0.115234375,
            0.0966796875
          ],
          "overlap_pair_set_accuracy": 0.10595703125,
          "source_swap_rate_given_pair_recovered": 0.03560830860534125,
          "loss": 1.517920434474945
        }
      },
      "high_overlap": {
        "examples": 191,
        "digit_accuracy": 0.535194880744619,
        "all_labeled_correct": 0.006980802792321117
      },
      "trainable_parameters": 1005866,
      "inference_parameters": 1005866,
      "zero_accuracy": 0.09771050347222221,
      "wrong_context_accuracy": 0.09998914930555557
    },
    {
      "encoder": "controls",
      "kind": "mel40",
      "mode": "B0",
      "budget": 4,
      "group": "frontend",
      "native_frames": 152,
      "native_dimension": 80,
      "metrics_mean": {
        "digit_accuracy": 0.54443359375,
        "all_labeled_correct": 0.005208333333333333,
        "overlap_digit_accuracy": 0.4175618489583333,
        "source_A_all_correct": 0.15690104166666666,
        "source_B_all_correct": 0.16080729166666666,
        "overlap_pair_set_accuracy": 0.10709635416666667,
        "source_swap_rate_given_pair_recovered": 0.04547094919843378
      },
      "metrics_seed_sd": {
        "digit_accuracy": 0.019051313609624893,
        "all_labeled_correct": 0.001491723859035104,
        "overlap_digit_accuracy": 0.015720710081090314,
        "source_A_all_correct": 0.011933790872280832,
        "source_B_all_correct": 0.012131930438531394,
        "overlap_pair_set_accuracy": 0.010723676048196051,
        "source_swap_rate_given_pair_recovered": 0.010134479405961088
      },
      "per_seed": {
        "0": {
          "digit_accuracy": 0.5450846354166666,
          "all_labeled_correct": 0.00390625,
          "digit_accuracy_by_position": [
            0.828125,
            0.400390625,
            0.40673828125
          ],
          "overlap_digit_accuracy": 0.403564453125,
          "source_A_all_correct": 0.154296875,
          "source_B_all_correct": 0.154296875,
          "pair_set_accuracy_by_position": [
            0.693359375,
            0.1328125,
            0.0927734375
          ],
          "overlap_pair_set_accuracy": 0.11279296875,
          "source_swap_rate_given_pair_recovered": 0.05649717514124294,
          "loss": 1.469946227967739
        },
        "1": {
          "digit_accuracy": 0.5631510416666666,
          "all_labeled_correct": 0.0068359375,
          "digit_accuracy_by_position": [
            0.8203125,
            0.4287109375,
            0.4404296875
          ],
          "overlap_digit_accuracy": 0.4345703125,
          "source_A_all_correct": 0.169921875,
          "source_B_all_correct": 0.1748046875,
          "pair_set_accuracy_by_position": [
            0.685546875,
            0.1201171875,
            0.107421875
          ],
          "overlap_pair_set_accuracy": 0.11376953125,
          "source_swap_rate_given_pair_recovered": 0.04335260115606936,
          "loss": 1.4255176410079002
        },
        "2": {
          "digit_accuracy": 0.5250651041666666,
          "all_labeled_correct": 0.0048828125,
          "digit_accuracy_by_position": [
            0.74609375,
            0.41357421875,
            0.41552734375
          ],
          "overlap_digit_accuracy": 0.41455078125,
          "source_A_all_correct": 0.146484375,
          "source_B_all_correct": 0.1533203125,
          "pair_set_accuracy_by_position": [
            0.5673828125,
            0.09375,
            0.095703125
          ],
          "overlap_pair_set_accuracy": 0.0947265625,
          "source_swap_rate_given_pair_recovered": 0.03656307129798903,
          "loss": 1.418816216289997
        }
      },
      "high_overlap": {
        "examples": 191,
        "digit_accuracy": 0.5360674810936591,
        "all_labeled_correct": 0.012216404886561954
      },
      "trainable_parameters": 1005354,
      "inference_parameters": 1005354,
      "zero_accuracy": 0.09847005208333333,
      "wrong_context_accuracy": 0.103515625
    },
    {
      "encoder": "controls",
      "kind": "dmel40",
      "mode": "B0",
      "budget": 16,
      "group": "frontend",
      "native_frames": 152,
      "native_dimension": 80,
      "metrics_mean": {
        "digit_accuracy": 0.5655381944444444,
        "all_labeled_correct": 0.007486979166666667,
        "overlap_digit_accuracy": 0.440673828125,
        "source_A_all_correct": 0.17740885416666666,
        "source_B_all_correct": 0.18326822916666666,
        "overlap_pair_set_accuracy": 0.11246744791666667,
        "source_swap_rate_given_pair_recovered": 0.03900125203216609
      },
      "metrics_seed_sd": {
        "digit_accuracy": 0.02058538603575173,
        "all_labeled_correct": 0.0034295747893400845,
        "overlap_digit_accuracy": 0.0264382992887403,
        "source_A_all_correct": 0.02565839374861791,
        "source_B_all_correct": 0.017203398778286215,
        "overlap_pair_set_accuracy": 0.008793582460442772,
        "source_swap_rate_given_pair_recovered": 0.013275565033257927
      },
      "per_seed": {
        "0": {
          "digit_accuracy": 0.5714518229166666,
          "all_labeled_correct": 0.0107421875,
          "digit_accuracy_by_position": [
            0.8125,
            0.44580078125,
            0.4560546875
          ],
          "overlap_digit_accuracy": 0.450927734375,
          "source_A_all_correct": 0.1865234375,
          "source_B_all_correct": 0.1884765625,
          "pair_set_accuracy_by_position": [
            0.6640625,
            0.1416015625,
            0.103515625
          ],
          "overlap_pair_set_accuracy": 0.12255859375,
          "source_swap_rate_given_pair_recovered": 0.04874446085672083,
          "loss": 1.3400166779756546
        },
        "1": {
          "digit_accuracy": 0.5426432291666666,
          "all_labeled_correct": 0.00390625,
          "digit_accuracy_by_position": [
            0.806640625,
            0.4091796875,
            0.412109375
          ],
          "overlap_digit_accuracy": 0.41064453125,
          "source_A_all_correct": 0.1484375,
          "source_B_all_correct": 0.1640625,
          "pair_set_accuracy_by_position": [
            0.6630859375,
            0.1181640625,
            0.0986328125
          ],
          "overlap_pair_set_accuracy": 0.1083984375,
          "source_swap_rate_given_pair_recovered": 0.04437869822485207,
          "loss": 1.5220916867256165
        },
        "2": {
          "digit_accuracy": 0.58251953125,
          "all_labeled_correct": 0.0078125,
          "digit_accuracy_by_position": [
            0.82666015625,
            0.45947265625,
            0.46142578125
          ],
          "overlap_digit_accuracy": 0.46044921875,
          "source_A_all_correct": 0.197265625,
          "source_B_all_correct": 0.197265625,
          "pair_set_accuracy_by_position": [
            0.693359375,
            0.1123046875,
            0.1005859375
          ],
          "overlap_pair_set_accuracy": 0.1064453125,
          "source_swap_rate_given_pair_recovered": 0.023880597014925373,
          "loss": 1.2107186242938042
        }
      },
      "high_overlap": {
        "examples": 191,
        "digit_accuracy": 0.5616637579988365,
        "all_labeled_correct": 0.013961605584642234
      },
      "trainable_parameters": 1006890,
      "inference_parameters": 1006890,
      "zero_accuracy": 0.10036892361111112,
      "wrong_context_accuracy": 0.10297309027777778
    },
    {
      "encoder": "controls",
      "kind": "dmel40",
      "mode": "B0",
      "budget": 8,
      "group": "frontend",
      "native_frames": 152,
      "native_dimension": 80,
      "metrics_mean": {
        "digit_accuracy": 0.5361870659722222,
        "all_labeled_correct": 0.0035807291666666665,
        "overlap_digit_accuracy": 0.4205729166666667,
        "source_A_all_correct": 0.16341145833333334,
        "source_B_all_correct": 0.1572265625,
        "overlap_pair_set_accuracy": 0.09928385416666667,
        "source_swap_rate_given_pair_recovered": 0.029981803897101186
      },
      "metrics_seed_sd": {
        "digit_accuracy": 0.026412527193907746,
        "all_labeled_correct": 0.000563818622255494,
        "overlap_digit_accuracy": 0.030678611592090392,
        "source_A_all_correct": 0.0312703384336532,
        "source_B_all_correct": 0.024569815674627196,
        "overlap_pair_set_accuracy": 0.00481726842023071,
        "source_swap_rate_given_pair_recovered": 0.001314757724322437
      },
      "per_seed": {
        "0": {
          "digit_accuracy": 0.5406901041666666,
          "all_labeled_correct": 0.00390625,
          "digit_accuracy_by_position": [
            0.76513671875,
            0.423828125,
            0.43310546875
          ],
          "overlap_digit_accuracy": 0.428466796875,
          "source_A_all_correct": 0.162109375,
          "source_B_all_correct": 0.169921875,
          "pair_set_accuracy_by_position": [
            0.5908203125,
            0.111328125,
            0.09375
          ],
          "overlap_pair_set_accuracy": 0.1025390625,
          "source_swap_rate_given_pair_recovered": 0.031413612565445025,
          "loss": 1.4053427129983902
        },
        "1": {
          "digit_accuracy": 0.5078125,
          "all_labeled_correct": 0.0029296875,
          "digit_accuracy_by_position": [
            0.75,
            0.37744140625,
            0.39599609375
          ],
          "overlap_digit_accuracy": 0.38671875,
          "source_A_all_correct": 0.1328125,
          "source_B_all_correct": 0.12890625,
          "pair_set_accuracy_by_position": [
            0.5693359375,
            0.095703125,
            0.091796875
          ],
          "overlap_pair_set_accuracy": 0.09375,
          "source_swap_rate_given_pair_recovered": 0.02882882882882883,
          "loss": 1.5357379466295242
        },
        "2": {
          "digit_accuracy": 0.56005859375,
          "all_labeled_correct": 0.00390625,
          "digit_accuracy_by_position": [
            0.787109375,
            0.44677734375,
            0.4462890625
          ],
          "overlap_digit_accuracy": 0.446533203125,
          "source_A_all_correct": 0.1953125,
          "source_B_all_correct": 0.1728515625,
          "pair_set_accuracy_by_position": [
            0.6376953125,
            0.099609375,
            0.103515625
          ],
          "overlap_pair_set_accuracy": 0.1015625,
          "source_swap_rate_given_pair_recovered": 0.0297029702970297,
          "loss": 1.264184109866619
        }
      },
      "high_overlap": {
        "examples": 191,
        "digit_accuracy": 0.5282140779522978,
        "all_labeled_correct": 0.008726003490401398
      },
      "trainable_parameters": 1005866,
      "inference_parameters": 1005866,
      "zero_accuracy": 0.10308159722222222,
      "wrong_context_accuracy": 0.09874131944444446
    },
    {
      "encoder": "controls",
      "kind": "dmel40",
      "mode": "B0",
      "budget": 4,
      "group": "frontend",
      "native_frames": 152,
      "native_dimension": 80,
      "metrics_mean": {
        "digit_accuracy": 0.5387912326388888,
        "all_labeled_correct": 0.0035807291666666665,
        "overlap_digit_accuracy": 0.4160970052083333,
        "source_A_all_correct": 0.15592447916666666,
        "source_B_all_correct": 0.15266927083333334,
        "overlap_pair_set_accuracy": 0.10628255208333333,
        "source_swap_rate_given_pair_recovered": 0.04709386449681267
      },
      "metrics_seed_sd": {
        "digit_accuracy": 0.00882865871640317,
        "all_labeled_correct": 0.000563818622255494,
        "overlap_digit_accuracy": 0.011770346752450964,
        "source_A_all_correct": 0.005011329530709848,
        "source_B_all_correct": 0.005722134059650698,
        "overlap_pair_set_accuracy": 0.0014917238590351043,
        "source_swap_rate_given_pair_recovered": 0.009499040289921512
      },
      "per_seed": {
        "0": {
          "digit_accuracy": 0.5419921875,
          "all_labeled_correct": 0.00390625,
          "digit_accuracy_by_position": [
            0.8203125,
            0.39697265625,
            0.40869140625
          ],
          "overlap_digit_accuracy": 0.40283203125,
          "source_A_all_correct": 0.16015625,
          "source_B_all_correct": 0.1591796875,
          "pair_set_accuracy_by_position": [
            0.68359375,
            0.1201171875,
            0.091796875
          ],
          "overlap_pair_set_accuracy": 0.10595703125,
          "source_swap_rate_given_pair_recovered": 0.05377906976744186,
          "loss": 1.5046737641096115
        },
        "1": {
          "digit_accuracy": 0.5455729166666666,
          "all_labeled_correct": 0.0029296875,
          "digit_accuracy_by_position": [
            0.79638671875,
            0.41943359375,
            0.4208984375
          ],
          "overlap_digit_accuracy": 0.420166015625,
          "source_A_all_correct": 0.1572265625,
          "source_B_all_correct": 0.150390625,
          "pair_set_accuracy_by_position": [
            0.6513671875,
            0.1083984375,
            0.1015625
          ],
          "overlap_pair_set_accuracy": 0.10498046875,
          "source_swap_rate_given_pair_recovered": 0.03622047244094488,
          "loss": 1.4206321239471436
        },
        "2": {
          "digit_accuracy": 0.52880859375,
          "all_labeled_correct": 0.00390625,
          "digit_accuracy_by_position": [
            0.73583984375,
            0.41650390625,
            0.43408203125
          ],
          "overlap_digit_accuracy": 0.42529296875,
          "source_A_all_correct": 0.150390625,
          "source_B_all_correct": 0.1484375,
          "pair_set_accuracy_by_position": [
            0.5478515625,
            0.1103515625,
            0.10546875
          ],
          "overlap_pair_set_accuracy": 0.10791015625,
          "source_swap_rate_given_pair_recovered": 0.05128205128205128,
          "loss": 1.4404774606227875
        }
      },
      "high_overlap": {
        "examples": 191,
        "digit_accuracy": 0.5328679464805118,
        "all_labeled_correct": 0.008726003490401396
      },
      "trainable_parameters": 1005354,
      "inference_parameters": 1005354,
      "zero_accuracy": 0.10118272569444446,
      "wrong_context_accuracy": 0.10237630208333333
    },
    {
      "encoder": "wavlm_mid",
      "kind": "mix_pre",
      "mode": "B0",
      "budget": 16,
      "group": "main",
      "native_frames": 189,
      "native_dimension": 768,
      "metrics_mean": {
        "digit_accuracy": 0.7025282118055555,
        "all_labeled_correct": 0.16048177083333334,
        "overlap_digit_accuracy": 0.56640625,
        "source_A_all_correct": 0.3733723958333333,
        "source_B_all_correct": 0.2783203125,
        "overlap_pair_set_accuracy": 0.6337890625,
        "source_swap_rate_given_pair_recovered": 0.22916630291578757
      },
      "metrics_seed_sd": {
        "digit_accuracy": 0.002894818049469198,
        "all_labeled_correct": 0.07554538371610672,
        "overlap_digit_accuracy": 0.0045739731433582015,
        "source_A_all_correct": 0.025113673856752488,
        "source_B_all_correct": 0.019604355370981184,
        "overlap_pair_set_accuracy": 0.15207197939500314,
        "source_swap_rate_given_pair_recovered": 0.03865171101066167
      },
      "per_seed": {
        "0": {
          "digit_accuracy": 0.70458984375,
          "all_labeled_correct": 0.07421875,
          "digit_accuracy_by_position": [
            0.9736328125,
            0.6005859375,
            0.53955078125
          ],
          "overlap_digit_accuracy": 0.570068359375,
          "source_A_all_correct": 0.3447265625,
          "source_B_all_correct": 0.30078125,
          "pair_set_accuracy_by_position": [
            0.94921875,
            0.6171875,
            0.3056640625
          ],
          "overlap_pair_set_accuracy": 0.46142578125,
          "source_swap_rate_given_pair_recovered": 0.18581907090464547,
          "loss": 0.75686264783144
        },
        "1": {
          "digit_accuracy": 0.7037760416666666,
          "all_labeled_correct": 0.1923828125,
          "digit_accuracy_by_position": [
            0.9755859375,
            0.58935546875,
            0.54638671875
          ],
          "overlap_digit_accuracy": 0.56787109375,
          "source_A_all_correct": 0.3916015625,
          "source_B_all_correct": 0.26953125,
          "pair_set_accuracy_by_position": [
            0.951171875,
            0.712890625,
            0.6689453125
          ],
          "overlap_pair_set_accuracy": 0.69091796875,
          "source_swap_rate_given_pair_recovered": 0.241635687732342,
          "loss": 0.7885903902351856
        },
        "2": {
          "digit_accuracy": 0.69921875,
          "all_labeled_correct": 0.21484375,
          "digit_accuracy_by_position": [
            0.97509765625,
            0.57275390625,
            0.5498046875
          ],
          "overlap_digit_accuracy": 0.561279296875,
          "source_A_all_correct": 0.3837890625,
          "source_B_all_correct": 0.2646484375,
          "pair_set_accuracy_by_position": [
            0.9501953125,
            0.7802734375,
            0.7177734375
          ],
          "overlap_pair_set_accuracy": 0.7490234375,
          "source_swap_rate_given_pair_recovered": 0.2600441501103753,
          "loss": 1.2666575461626053
        }
      },
      "high_overlap": {
        "examples": 191,
        "digit_accuracy": 0.6844095404304827,
        "all_labeled_correct": 0.12216404886561955
      },
      "trainable_parameters": 1096330,
      "inference_parameters": 1096330,
      "zero_accuracy": 0.10053168402777779,
      "wrong_context_accuracy": 0.10340711805555557
    },
    {
      "encoder": "wavlm_mid",
      "kind": "mix_pre",
      "mode": "B1",
      "budget": 16,
      "group": "main",
      "native_frames": 189,
      "native_dimension": 768,
      "metrics_mean": {
        "digit_accuracy": 0.7281358506944445,
        "all_labeled_correct": 0.24772135416666666,
        "overlap_digit_accuracy": 0.6045735677083334,
        "source_A_all_correct": 0.4283854166666667,
        "source_B_all_correct": 0.32421875,
        "overlap_pair_set_accuracy": 0.7314453125,
        "source_swap_rate_given_pair_recovered": 0.22196597398086368
      },
      "metrics_seed_sd": {
        "digit_accuracy": 0.011680635234023226,
        "all_labeled_correct": 0.0390177152127489,
        "overlap_digit_accuracy": 0.01782282301497105,
        "source_A_all_correct": 0.010164384763018225,
        "source_B_all_correct": 0.0341796875,
        "overlap_pair_set_accuracy": 0.04974002005766497,
        "source_swap_rate_given_pair_recovered": 0.0010982295278676635
      },
      "per_seed": {
        "0": {
          "digit_accuracy": 0.7146809895833334,
          "all_labeled_correct": 0.2041015625,
          "digit_accuracy_by_position": [
            0.9755859375,
            0.5947265625,
            0.57373046875
          ],
          "overlap_digit_accuracy": 0.584228515625,
          "source_A_all_correct": 0.4169921875,
          "source_B_all_correct": 0.28515625,
          "pair_set_accuracy_by_position": [
            0.951171875,
            0.6650390625,
            0.68359375
          ],
          "overlap_pair_set_accuracy": 0.67431640625,
          "source_swap_rate_given_pair_recovered": 0.2231638418079096,
          "loss": 0.9302889369428158
        },
        "1": {
          "digit_accuracy": 0.7356770833333334,
          "all_labeled_correct": 0.259765625,
          "digit_accuracy_by_position": [
            0.97216796875,
            0.6396484375,
            0.59521484375
          ],
          "overlap_digit_accuracy": 0.617431640625,
          "source_A_all_correct": 0.431640625,
          "source_B_all_correct": 0.3388671875,
          "pair_set_accuracy_by_position": [
            0.947265625,
            0.7646484375,
            0.7451171875
          ],
          "overlap_pair_set_accuracy": 0.7548828125,
          "source_swap_rate_given_pair_recovered": 0.22172751558325912,
          "loss": 1.4050298482179642
        },
        "2": {
          "digit_accuracy": 0.7340494791666666,
          "all_labeled_correct": 0.279296875,
          "digit_accuracy_by_position": [
            0.97802734375,
            0.63916015625,
            0.5849609375
          ],
          "overlap_digit_accuracy": 0.612060546875,
          "source_A_all_correct": 0.4365234375,
          "source_B_all_correct": 0.3486328125,
          "pair_set_accuracy_by_position": [
            0.9560546875,
            0.7646484375,
            0.765625
          ],
          "overlap_pair_set_accuracy": 0.76513671875,
          "source_swap_rate_given_pair_recovered": 0.2210065645514223,
          "loss": 1.5812783762812614
        }
      },
      "high_overlap": {
        "examples": 191,
        "digit_accuracy": 0.6966259453170448,
        "all_labeled_correct": 0.18150087260034906
      },
      "trainable_parameters": 1693972,
      "inference_parameters": 1096330,
      "zero_accuracy": 0.10264756944444443,
      "wrong_context_accuracy": 0.10394965277777779
    },
    {
      "encoder": "wavlm_mid",
      "kind": "mix_pre",
      "mode": "B2",
      "budget": 16,
      "group": "main",
      "native_frames": 189,
      "native_dimension": 768,
      "metrics_mean": {
        "digit_accuracy": 0.7365993923611112,
        "all_labeled_correct": 0.2682291666666667,
        "overlap_digit_accuracy": 0.616943359375,
        "source_A_all_correct": 0.4111328125,
        "source_B_all_correct": 0.369140625,
        "overlap_pair_set_accuracy": 0.7428385416666666,
        "source_swap_rate_given_pair_recovered": 0.215258440153559
      },
      "metrics_seed_sd": {
        "digit_accuracy": 0.025727646371367673,
        "all_labeled_correct": 0.04614020985710351,
        "overlap_digit_accuracy": 0.03751433416431309,
        "source_A_all_correct": 0.04433421665162565,
        "source_B_all_correct": 0.041581384484460485,
        "overlap_pair_set_accuracy": 0.03686550384490366,
        "source_swap_rate_given_pair_recovered": 0.023174578836796737
      },
      "per_seed": {
        "0": {
          "digit_accuracy": 0.76416015625,
          "all_labeled_correct": 0.318359375,
          "digit_accuracy_by_position": [
            0.97802734375,
            0.68701171875,
            0.62744140625
          ],
          "overlap_digit_accuracy": 0.6572265625,
          "source_A_all_correct": 0.4609375,
          "source_B_all_correct": 0.4150390625,
          "pair_set_accuracy_by_position": [
            0.9560546875,
            0.7744140625,
            0.78515625
          ],
          "overlap_pair_set_accuracy": 0.77978515625,
          "source_swap_rate_given_pair_recovered": 0.18971477960242006,
          "loss": 1.4155153334140778
        },
        "1": {
          "digit_accuracy": 0.732421875,
          "all_labeled_correct": 0.2587890625,
          "digit_accuracy_by_position": [
            0.97607421875,
            0.60693359375,
            0.6142578125
          ],
          "overlap_digit_accuracy": 0.610595703125,
          "source_A_all_correct": 0.396484375,
          "source_B_all_correct": 0.3583984375,
          "pair_set_accuracy_by_position": [
            0.9560546875,
            0.728515625,
            0.7568359375
          ],
          "overlap_pair_set_accuracy": 0.74267578125,
          "source_swap_rate_given_pair_recovered": 0.22112359550561797,
          "loss": 1.6157953217625618
        },
        "2": {
          "digit_accuracy": 0.7132161458333334,
          "all_labeled_correct": 0.2275390625,
          "digit_accuracy_by_position": [
            0.9736328125,
            0.6240234375,
            0.5419921875
          ],
          "overlap_digit_accuracy": 0.5830078125,
          "source_A_all_correct": 0.3759765625,
          "source_B_all_correct": 0.333984375,
          "pair_set_accuracy_by_position": [
            0.9482421875,
            0.6689453125,
            0.7431640625
          ],
          "overlap_pair_set_accuracy": 0.7060546875,
          "source_swap_rate_given_pair_recovered": 0.23493694535263895,
          "loss": 1.5478944778442383
        }
      },
      "high_overlap": {
        "examples": 191,
        "digit_accuracy": 0.6919720767888307,
        "all_labeled_correct": 0.15881326352530542
      },
      "trainable_parameters": 1694228,
      "inference_parameters": 1163146,
      "zero_accuracy": 0.09825303819444443,
      "wrong_context_accuracy": 0.10319010416666667
    },
    {
      "encoder": "wavlm_mid",
      "kind": "mix_pre",
      "mode": "B0",
      "budget": 8,
      "group": "main",
      "native_frames": 189,
      "native_dimension": 768,
      "metrics_mean": {
        "digit_accuracy": 0.693088107638889,
        "all_labeled_correct": 0.11165364583333333,
        "overlap_digit_accuracy": 0.5548502604166666,
        "source_A_all_correct": 0.3538411458333333,
        "source_B_all_correct": 0.2845052083333333,
        "overlap_pair_set_accuracy": 0.4962565104166667,
        "source_swap_rate_given_pair_recovered": 0.20635224532694285
      },
      "metrics_seed_sd": {
        "digit_accuracy": 0.0057529149921056915,
        "all_labeled_correct": 0.07748968568482228,
        "overlap_digit_accuracy": 0.014038262849881624,
        "source_A_all_correct": 0.038649345025899076,
        "source_B_all_correct": 0.010976377148494377,
        "overlap_pair_set_accuracy": 0.183804870855291,
        "source_swap_rate_given_pair_recovered": 0.04353503639878053
      },
      "per_seed": {
        "0": {
          "digit_accuracy": 0.6892903645833334,
          "all_labeled_correct": 0.087890625,
          "digit_accuracy_by_position": [
            0.9755859375,
            0.537109375,
            0.55517578125
          ],
          "overlap_digit_accuracy": 0.546142578125,
          "source_A_all_correct": 0.330078125,
          "source_B_all_correct": 0.2939453125,
          "pair_set_accuracy_by_position": [
            0.953125,
            0.4326171875,
            0.51171875
          ],
          "overlap_pair_set_accuracy": 0.47216796875,
          "source_swap_rate_given_pair_recovered": 0.21579264617239302,
          "loss": 0.7725072838366032
        },
        "1": {
          "digit_accuracy": 0.69970703125,
          "all_labeled_correct": 0.1982421875,
          "digit_accuracy_by_position": [
            0.95703125,
            0.568359375,
            0.57373046875
          ],
          "overlap_digit_accuracy": 0.571044921875,
          "source_A_all_correct": 0.3984375,
          "source_B_all_correct": 0.2724609375,
          "pair_set_accuracy_by_position": [
            0.9365234375,
            0.7060546875,
            0.67578125
          ],
          "overlap_pair_set_accuracy": 0.69091796875,
          "source_swap_rate_given_pair_recovered": 0.24439252336448597,
          "loss": 0.821693878620863
        },
        "2": {
          "digit_accuracy": 0.6902669270833334,
          "all_labeled_correct": 0.048828125,
          "digit_accuracy_by_position": [
            0.97607421875,
            0.54833984375,
            0.54638671875
          ],
          "overlap_digit_accuracy": 0.54736328125,
          "source_A_all_correct": 0.3330078125,
          "source_B_all_correct": 0.287109375,
          "pair_set_accuracy_by_position": [
            0.9541015625,
            0.328125,
            0.3232421875
          ],
          "overlap_pair_set_accuracy": 0.32568359375,
          "source_swap_rate_given_pair_recovered": 0.1588715664439495,
          "loss": 0.7581492103636265
        }
      },
      "high_overlap": {
        "examples": 191,
        "digit_accuracy": 0.669284467713787,
        "all_labeled_correct": 0.06806282722513089
      },
      "trainable_parameters": 1095306,
      "inference_parameters": 1095306,
      "zero_accuracy": 0.10438368055555554,
      "wrong_context_accuracy": 0.10210503472222221
    },
    {
      "encoder": "wavlm_mid",
      "kind": "mix_pre",
      "mode": "B1",
      "budget": 8,
      "group": "main",
      "native_frames": 189,
      "native_dimension": 768,
      "metrics_mean": {
        "digit_accuracy": 0.7291666666666666,
        "all_labeled_correct": 0.22819010416666666,
        "overlap_digit_accuracy": 0.6058756510416666,
        "source_A_all_correct": 0.42578125,
        "source_B_all_correct": 0.3330078125,
        "overlap_pair_set_accuracy": 0.6769205729166666,
        "source_swap_rate_given_pair_recovered": 0.20424206219644536
      },
      "metrics_seed_sd": {
        "digit_accuracy": 0.030605450746289852,
        "all_labeled_correct": 0.06703753627890163,
        "overlap_digit_accuracy": 0.046812864022904396,
        "source_A_all_correct": 0.0322709211755045,
        "source_B_all_correct": 0.07236453324237446,
        "overlap_pair_set_accuracy": 0.05169866288975195,
        "source_swap_rate_given_pair_recovered": 0.025722484905722636
      },
      "per_seed": {
        "0": {
          "digit_accuracy": 0.71044921875,
          "all_labeled_correct": 0.1728515625,
          "digit_accuracy_by_position": [
            0.97607421875,
            0.599609375,
            0.5556640625
          ],
          "overlap_digit_accuracy": 0.57763671875,
          "source_A_all_correct": 0.41015625,
          "source_B_all_correct": 0.283203125,
          "pair_set_accuracy_by_position": [
            0.9521484375,
            0.61328125,
            0.642578125
          ],
          "overlap_pair_set_accuracy": 0.6279296875,
          "source_swap_rate_given_pair_recovered": 0.21466992665036674,
          "loss": 1.0376763567328453
        },
        "1": {
          "digit_accuracy": 0.7125651041666666,
          "all_labeled_correct": 0.208984375,
          "digit_accuracy_by_position": [
            0.9775390625,
            0.57421875,
            0.5859375
          ],
          "overlap_digit_accuracy": 0.580078125,
          "source_A_all_correct": 0.404296875,
          "source_B_all_correct": 0.2998046875,
          "pair_set_accuracy_by_position": [
            0.955078125,
            0.6767578125,
            0.6669921875
          ],
          "overlap_pair_set_accuracy": 0.671875,
          "source_swap_rate_given_pair_recovered": 0.22311320754716982,
          "loss": 1.0493176653981209
        },
        "2": {
          "digit_accuracy": 0.7644856770833334,
          "all_labeled_correct": 0.302734375,
          "digit_accuracy_by_position": [
            0.9736328125,
            0.66650390625,
            0.6533203125
          ],
          "overlap_digit_accuracy": 0.659912109375,
          "source_A_all_correct": 0.462890625,
          "source_B_all_correct": 0.416015625,
          "pair_set_accuracy_by_position": [
            0.94921875,
            0.728515625,
            0.7333984375
          ],
          "overlap_pair_set_accuracy": 0.73095703125,
          "source_swap_rate_given_pair_recovered": 0.17494305239179955,
          "loss": 1.3375749662518501
        }
      },
      "high_overlap": {
        "examples": 191,
        "digit_accuracy": 0.6966259453170448,
        "all_labeled_correct": 0.13612565445026178
      },
      "trainable_parameters": 1692948,
      "inference_parameters": 1095306,
      "zero_accuracy": 0.10460069444444443,
      "wrong_context_accuracy": 0.10438368055555554
    },
    {
      "encoder": "wavlm_mid",
      "kind": "mix_pre",
      "mode": "B2",
      "budget": 8,
      "group": "main",
      "native_frames": 189,
      "native_dimension": 768,
      "metrics_mean": {
        "digit_accuracy": 0.7759331597222223,
        "all_labeled_correct": 0.3518880208333333,
        "overlap_digit_accuracy": 0.6753743489583334,
        "source_A_all_correct": 0.5022786458333334,
        "source_B_all_correct": 0.435546875,
        "overlap_pair_set_accuracy": 0.7859700520833334,
        "source_swap_rate_given_pair_recovered": 0.17809045350517386
      },
      "metrics_seed_sd": {
        "digit_accuracy": 0.08694778658043147,
        "all_labeled_correct": 0.16937753297758124,
        "overlap_digit_accuracy": 0.13019228518453718,
        "source_A_all_correct": 0.18118414723914106,
        "source_B_all_correct": 0.1953930497962796,
        "overlap_pair_set_accuracy": 0.026816970511786244,
        "source_swap_rate_given_pair_recovered": 0.10056197776201058
      },
      "per_seed": {
        "0": {
          "digit_accuracy": 0.7278645833333334,
          "all_labeled_correct": 0.267578125,
          "digit_accuracy_by_position": [
            0.978515625,
            0.60498046875,
            0.60009765625
          ],
          "overlap_digit_accuracy": 0.6025390625,
          "source_A_all_correct": 0.4111328125,
          "source_B_all_correct": 0.326171875,
          "pair_set_accuracy_by_position": [
            0.958984375,
            0.78515625,
            0.80078125
          ],
          "overlap_pair_set_accuracy": 0.79296875,
          "source_swap_rate_given_pair_recovered": 0.23909324208725408,
          "loss": 1.6740984320640564
        },
        "1": {
          "digit_accuracy": 0.7236328125,
          "all_labeled_correct": 0.2412109375,
          "digit_accuracy_by_position": [
            0.97509765625,
            0.626953125,
            0.56884765625
          ],
          "overlap_digit_accuracy": 0.597900390625,
          "source_A_all_correct": 0.384765625,
          "source_B_all_correct": 0.3193359375,
          "pair_set_accuracy_by_position": [
            0.9501953125,
            0.7685546875,
            0.744140625
          ],
          "overlap_pair_set_accuracy": 0.75634765625,
          "source_swap_rate_given_pair_recovered": 0.23315602836879432,
          "loss": 1.451847329735756
        },
        "2": {
          "digit_accuracy": 0.8763020833333334,
          "all_labeled_correct": 0.546875,
          "digit_accuracy_by_position": [
            0.9775390625,
            0.826171875,
            0.8251953125
          ],
          "overlap_digit_accuracy": 0.82568359375,
          "source_A_all_correct": 0.7109375,
          "source_B_all_correct": 0.6611328125,
          "pair_set_accuracy_by_position": [
            0.955078125,
            0.818359375,
            0.798828125
          ],
          "overlap_pair_set_accuracy": 0.80859375,
          "source_swap_rate_given_pair_recovered": 0.062022090059473234,
          "loss": 0.7023312468081713
        }
      },
      "high_overlap": {
        "examples": 191,
        "digit_accuracy": 0.7385107620709715,
        "all_labeled_correct": 0.2495636998254799
      },
      "trainable_parameters": 1693204,
      "inference_parameters": 1162122,
      "zero_accuracy": 0.10259331597222222,
      "wrong_context_accuracy": 0.10536024305555557
    },
    {
      "encoder": "wavlm_mid",
      "kind": "mix_pre",
      "mode": "B0",
      "budget": 4,
      "group": "main",
      "native_frames": 189,
      "native_dimension": 768,
      "metrics_mean": {
        "digit_accuracy": 0.7004665798611112,
        "all_labeled_correct": 0.13020833333333334,
        "overlap_digit_accuracy": 0.5638834635416666,
        "source_A_all_correct": 0.3802083333333333,
        "source_B_all_correct": 0.2701822916666667,
        "overlap_pair_set_accuracy": 0.5226236979166666,
        "source_swap_rate_given_pair_recovered": 0.19340683586077967
      },
      "metrics_seed_sd": {
        "digit_accuracy": 0.013587651872271901,
        "all_labeled_correct": 0.09696205083728178,
        "overlap_digit_accuracy": 0.021794707670212347,
        "source_A_all_correct": 0.036543972613928444,
        "source_B_all_correct": 0.009281625930588056,
        "overlap_pair_set_accuracy": 0.26486336214411116,
        "source_swap_rate_given_pair_recovered": 0.07493873734537464
      },
      "per_seed": {
        "0": {
          "digit_accuracy": 0.7117513020833334,
          "all_labeled_correct": 0.1708984375,
          "digit_accuracy_by_position": [
            0.96875,
            0.5849609375,
            0.58154296875
          ],
          "overlap_digit_accuracy": 0.583251953125,
          "source_A_all_correct": 0.408203125,
          "source_B_all_correct": 0.279296875,
          "pair_set_accuracy_by_position": [
            0.94140625,
            0.5693359375,
            0.69921875
          ],
          "overlap_pair_set_accuracy": 0.63427734375,
          "source_swap_rate_given_pair_recovered": 0.22484909456740443,
          "loss": 0.7237024903297424
        },
        "1": {
          "digit_accuracy": 0.6853841145833334,
          "all_labeled_correct": 0.01953125,
          "digit_accuracy_by_position": [
            0.9755859375,
            0.5400390625,
            0.54052734375
          ],
          "overlap_digit_accuracy": 0.540283203125,
          "source_A_all_correct": 0.3388671875,
          "source_B_all_correct": 0.2705078125,
          "pair_set_accuracy_by_position": [
            0.9560546875,
            0.2265625,
            0.2138671875
          ],
          "overlap_pair_set_accuracy": 0.22021484375,
          "source_swap_rate_given_pair_recovered": 0.10786914235190097,
          "loss": 0.7107658870518208
        },
        "2": {
          "digit_accuracy": 0.7042643229166666,
          "all_labeled_correct": 0.2001953125,
          "digit_accuracy_by_position": [
            0.9765625,
            0.59423828125,
            0.5419921875
          ],
          "overlap_digit_accuracy": 0.568115234375,
          "source_A_all_correct": 0.3935546875,
          "source_B_all_correct": 0.2607421875,
          "pair_set_accuracy_by_position": [
            0.953125,
            0.68359375,
            0.7431640625
          ],
          "overlap_pair_set_accuracy": 0.71337890625,
          "source_swap_rate_given_pair_recovered": 0.2475022706630336,
          "loss": 1.1226970069110394
        }
      },
      "high_overlap": {
        "examples": 191,
        "digit_accuracy": 0.6820826061663757,
        "all_labeled_correct": 0.1169284467713787
      },
      "trainable_parameters": 1094794,
      "inference_parameters": 1094794,
      "zero_accuracy": 0.10112847222222222,
      "wrong_context_accuracy": 0.10356987847222222
    },
    {
      "encoder": "wavlm_mid",
      "kind": "mix_pre",
      "mode": "B1",
      "budget": 4,
      "group": "main",
      "native_frames": 189,
      "native_dimension": 768,
      "metrics_mean": {
        "digit_accuracy": 0.7310112847222222,
        "all_labeled_correct": 0.234375,
        "overlap_digit_accuracy": 0.6082356770833334,
        "source_A_all_correct": 0.4449869791666667,
        "source_B_all_correct": 0.3128255208333333,
        "overlap_pair_set_accuracy": 0.6979166666666666,
        "source_swap_rate_given_pair_recovered": 0.2035630912614699
      },
      "metrics_seed_sd": {
        "digit_accuracy": 0.008839154450701518,
        "all_labeled_correct": 0.0300838316420886,
        "overlap_digit_accuracy": 0.013134523599845774,
        "source_A_all_correct": 0.004615054322512313,
        "source_B_all_correct": 0.0241259035985518,
        "overlap_pair_set_accuracy": 0.06658253924771984,
        "source_swap_rate_given_pair_recovered": 0.022953703673826136
      },
      "per_seed": {
        "0": {
          "digit_accuracy": 0.7392578125,
          "all_labeled_correct": 0.22265625,
          "digit_accuracy_by_position": [
            0.97802734375,
            0.650390625,
            0.58935546875
          ],
          "overlap_digit_accuracy": 0.619873046875,
          "source_A_all_correct": 0.4501953125,
          "source_B_all_correct": 0.3349609375,
          "pair_set_accuracy_by_position": [
            0.9580078125,
            0.6396484375,
            0.66015625
          ],
          "overlap_pair_set_accuracy": 0.64990234375,
          "source_swap_rate_given_pair_recovered": 0.17985611510791366,
          "loss": 0.959917675703764
        },
        "1": {
          "digit_accuracy": 0.7216796875,
          "all_labeled_correct": 0.2119140625,
          "digit_accuracy_by_position": [
            0.97705078125,
            0.60107421875,
            0.5869140625
          ],
          "overlap_digit_accuracy": 0.593994140625,
          "source_A_all_correct": 0.44140625,
          "source_B_all_correct": 0.287109375,
          "pair_set_accuracy_by_position": [
            0.9560546875,
            0.6708984375,
            0.6689453125
          ],
          "overlap_pair_set_accuracy": 0.669921875,
          "source_swap_rate_given_pair_recovered": 0.20515222482435597,
          "loss": 1.2198014669120312
        },
        "2": {
          "digit_accuracy": 0.7320963541666666,
          "all_labeled_correct": 0.2685546875,
          "digit_accuracy_by_position": [
            0.974609375,
            0.625,
            0.5966796875
          ],
          "overlap_digit_accuracy": 0.61083984375,
          "source_A_all_correct": 0.443359375,
          "source_B_all_correct": 0.31640625,
          "pair_set_accuracy_by_position": [
            0.94921875,
            0.76953125,
            0.7783203125
          ],
          "overlap_pair_set_accuracy": 0.77392578125,
          "source_swap_rate_given_pair_recovered": 0.22568093385214008,
          "loss": 1.621268130838871
        }
      },
      "high_overlap": {
        "examples": 191,
        "digit_accuracy": 0.6931355439208843,
        "all_labeled_correct": 0.15706806282722513
      },
      "trainable_parameters": 1692436,
      "inference_parameters": 1094794,
      "zero_accuracy": 0.09781901041666667,
      "wrong_context_accuracy": 0.1025390625
    },
    {
      "encoder": "wavlm_mid",
      "kind": "mix_pre",
      "mode": "B2",
      "budget": 4,
      "group": "main",
      "native_frames": 189,
      "native_dimension": 768,
      "metrics_mean": {
        "digit_accuracy": 0.8083767361111112,
        "all_labeled_correct": 0.4020182291666667,
        "overlap_digit_accuracy": 0.7240397135416666,
        "source_A_all_correct": 0.5693359375,
        "source_B_all_correct": 0.5130208333333334,
        "overlap_pair_set_accuracy": 0.7766927083333334,
        "source_swap_rate_given_pair_recovered": 0.13376552241836778
      },
      "metrics_seed_sd": {
        "digit_accuracy": 0.08001215559834148,
        "all_labeled_correct": 0.16122550995238796,
        "overlap_digit_accuracy": 0.11969175180132344,
        "source_A_all_correct": 0.14006779800192967,
        "source_B_all_correct": 0.2049533040276943,
        "overlap_pair_set_accuracy": 0.034375601098556,
        "source_swap_rate_given_pair_recovered": 0.08510228941232212
      },
      "per_seed": {
        "0": {
          "digit_accuracy": 0.7932942708333334,
          "all_labeled_correct": 0.369140625,
          "digit_accuracy_by_position": [
            0.9775390625,
            0.70947265625,
            0.69287109375
          ],
          "overlap_digit_accuracy": 0.701171875,
          "source_A_all_correct": 0.5341796875,
          "source_B_all_correct": 0.4775390625,
          "pair_set_accuracy_by_position": [
            0.95703125,
            0.7822265625,
            0.7626953125
          ],
          "overlap_pair_set_accuracy": 0.7724609375,
          "source_swap_rate_given_pair_recovered": 0.1505892623308599,
          "loss": 1.1978906840085983
        },
        "1": {
          "digit_accuracy": 0.8948567708333334,
          "all_labeled_correct": 0.5771484375,
          "digit_accuracy_by_position": [
            0.9775390625,
            0.849609375,
            0.857421875
          ],
          "overlap_digit_accuracy": 0.853515625,
          "source_A_all_correct": 0.7236328125,
          "source_B_all_correct": 0.7333984375,
          "pair_set_accuracy_by_position": [
            0.955078125,
            0.8193359375,
            0.806640625
          ],
          "overlap_pair_set_accuracy": 0.81298828125,
          "source_swap_rate_given_pair_recovered": 0.04150783566285472,
          "loss": 0.6265615224838257
        },
        "2": {
          "digit_accuracy": 0.7369791666666666,
          "all_labeled_correct": 0.259765625,
          "digit_accuracy_by_position": [
            0.97607421875,
            0.62060546875,
            0.6142578125
          ],
          "overlap_digit_accuracy": 0.617431640625,
          "source_A_all_correct": 0.4501953125,
          "source_B_all_correct": 0.328125,
          "pair_set_accuracy_by_position": [
            0.953125,
            0.7333984375,
            0.755859375
          ],
          "overlap_pair_set_accuracy": 0.74462890625,
          "source_swap_rate_given_pair_recovered": 0.20919946926138877,
          "loss": 1.2701722383499146
        }
      },
      "high_overlap": {
        "examples": 191,
        "digit_accuracy": 0.7737056428155905,
        "all_labeled_correct": 0.29668411867364747
      },
      "trainable_parameters": 1692692,
      "inference_parameters": 1161610,
      "zero_accuracy": 0.10460069444444443,
      "wrong_context_accuracy": 0.10487196180555557
    }
  ],
  "examples": [
    {
      "id": "test-00000",
      "gold": [
        8,
        5,
        3,
        5,
        1,
        3
      ],
      "predictions": {
        "fire/B0": [
          8,
          5,
          3,
          5,
          1,
          3
        ],
        "fire/B2": [
          8,
          5,
          3,
          5,
          1,
          3
        ],
        "qwen/B0": [
          8,
          5,
          3,
          5,
          1,
          3
        ],
        "qwen/B2": [
          8,
          5,
          3,
          5,
          1,
          3
        ],
        "wavlm/B0": [
          8,
          5,
          3,
          5,
          1,
          3
        ],
        "wavlm/B2": [
          8,
          5,
          3,
          5,
          5,
          3
        ],
        "wavlm_mid/B0": [
          8,
          1,
          3,
          5,
          1,
          3
        ],
        "wavlm_mid/B2": [
          8,
          5,
          3,
          5,
          1,
          3
        ],
        "encodec/B0": [
          8,
          1,
          3,
          5,
          5,
          3
        ],
        "encodec/B2": [
          8,
          5,
          3,
          7,
          5,
          3
        ],
        "speech/B0": [
          8,
          1,
          3,
          5,
          1,
          3
        ],
        "speech/B2": [
          8,
          5,
          3,
          5,
          5,
          3
        ]
      },
      "active_overlap": 0.19298245614035087
    },
    {
      "id": "test-00009",
      "gold": [
        2,
        4,
        9,
        5,
        8,
        6
      ],
      "predictions": {
        "fire/B0": [
          2,
          4,
          6,
          5,
          8,
          9
        ],
        "fire/B2": [
          2,
          4,
          9,
          5,
          8,
          6
        ],
        "qwen/B0": [
          2,
          4,
          9,
          5,
          8,
          6
        ],
        "qwen/B2": [
          2,
          4,
          9,
          5,
          8,
          6
        ],
        "wavlm/B0": [
          2,
          4,
          6,
          5,
          4,
          6
        ],
        "wavlm/B2": [
          2,
          4,
          6,
          5,
          4,
          6
        ],
        "wavlm_mid/B0": [
          2,
          8,
          6,
          5,
          8,
          6
        ],
        "wavlm_mid/B2": [
          2,
          4,
          6,
          5,
          8,
          9
        ],
        "encodec/B0": [
          2,
          8,
          2,
          5,
          8,
          6
        ],
        "encodec/B2": [
          2,
          4,
          6,
          5,
          4,
          6
        ],
        "speech/B0": [
          2,
          4,
          6,
          5,
          4,
          6
        ],
        "speech/B2": [
          2,
          4,
          6,
          5,
          8,
          9
        ]
      },
      "active_overlap": 0.2727272727272727
    },
    {
      "id": "test-00005",
      "gold": [
        6,
        2,
        0,
        6,
        4,
        8
      ],
      "predictions": {
        "fire/B0": [
          6,
          4,
          0,
          6,
          0,
          8
        ],
        "fire/B2": [
          6,
          0,
          0,
          6,
          4,
          8
        ],
        "qwen/B0": [
          6,
          2,
          8,
          6,
          4,
          0
        ],
        "qwen/B2": [
          6,
          2,
          0,
          6,
          4,
          8
        ],
        "wavlm/B0": [
          6,
          4,
          8,
          6,
          4,
          8
        ],
        "wavlm/B2": [
          6,
          4,
          8,
          6,
          4,
          8
        ],
        "wavlm_mid/B0": [
          6,
          4,
          0,
          6,
          4,
          0
        ],
        "wavlm_mid/B2": [
          6,
          4,
          0,
          6,
          7,
          8
        ],
        "encodec/B0": [
          6,
          4,
          8,
          6,
          4,
          8
        ],
        "encodec/B2": [
          6,
          4,
          8,
          6,
          4,
          8
        ],
        "speech/B0": [
          6,
          4,
          8,
          6,
          4,
          8
        ],
        "speech/B2": [
          6,
          4,
          8,
          6,
          4,
          8
        ]
      },
      "active_overlap": 0.5142857142857142
    }
  ],
  "native": [
    {
      "encoder": "wavlm",
      "kind": "mix_pre",
      "test": {
        "digit_accuracy": 0.884765625,
        "all_labeled_correct": 0.5693359375,
        "digit_accuracy_by_position": [
          0.9814453125,
          0.8330078125,
          0.83984375
        ],
        "overlap_digit_accuracy": 0.83642578125,
        "source_A_all_correct": 0.7216796875,
        "source_B_all_correct": 0.701171875,
        "pair_set_accuracy_by_position": [
          0.962890625,
          0.794921875,
          0.796875
        ],
        "overlap_pair_set_accuracy": 0.7958984375,
        "source_swap_rate_given_pair_recovered": 0.04574604531851219,
        "loss": 0.6872431971132755
      }
    },
    {
      "encoder": "wavlm",
      "kind": "mix_post",
      "test": {
        "digit_accuracy": 0.7548828125,
        "all_labeled_correct": 0.2412109375,
        "digit_accuracy_by_position": [
          0.96142578125,
          0.6435546875,
          0.65966796875
        ],
        "overlap_digit_accuracy": 0.651611328125,
        "source_A_all_correct": 0.4716796875,
        "source_B_all_correct": 0.3994140625,
        "pair_set_accuracy_by_position": [
          0.9267578125,
          0.623046875,
          0.65625
        ],
        "overlap_pair_set_accuracy": 0.6396484375,
        "source_swap_rate_given_pair_recovered": 0.150398406374502,
        "loss": 1.0160765834152699
      }
    },
    {
      "encoder": "wavlm",
      "kind": "single",
      "test": {
        "digit_accuracy": 0.9951171875,
        "all_labeled_correct": 0.9853515625,
        "digit_accuracy_by_position": [
          0.99658203125,
          0.9912109375,
          0.99755859375
        ],
        "overlap_digit_accuracy": 0.994384765625,
        "loss": 0.025242432641789492
      }
    },
    {
      "encoder": "wavlm",
      "kind": "oracle",
      "test": {
        "digit_accuracy": 0.99462890625,
        "all_labeled_correct": 0.9677734375,
        "digit_accuracy_by_position": [
          0.99658203125,
          0.9931640625,
          0.994140625
        ],
        "overlap_digit_accuracy": 0.99365234375,
        "source_A_all_correct": 0.984375,
        "source_B_all_correct": 0.9833984375,
        "pair_set_accuracy_by_position": [
          0.9931640625,
          0.986328125,
          0.98828125
        ],
        "overlap_pair_set_accuracy": 0.9873046875,
        "source_swap_rate_given_pair_recovered": 0.0,
        "loss": 0.021843955852091312
      }
    },
    {
      "encoder": "encodec",
      "kind": "mix_pre",
      "test": {
        "digit_accuracy": 0.6316731770833334,
        "all_labeled_correct": 0.0322265625,
        "digit_accuracy_by_position": [
          0.92236328125,
          0.48779296875,
          0.48486328125
        ],
        "overlap_digit_accuracy": 0.486328125,
        "source_A_all_correct": 0.25390625,
        "source_B_all_correct": 0.2177734375,
        "pair_set_accuracy_by_position": [
          0.8564453125,
          0.2998046875,
          0.2705078125
        ],
        "overlap_pair_set_accuracy": 0.28515625,
        "source_swap_rate_given_pair_recovered": 0.14238134887593673,
        "loss": 1.237171895802021
      }
    },
    {
      "encoder": "encodec",
      "kind": "mix_post",
      "test": {
        "digit_accuracy": 0.6311848958333334,
        "all_labeled_correct": 0.021484375,
        "digit_accuracy_by_position": [
          0.9140625,
          0.482421875,
          0.4970703125
        ],
        "overlap_digit_accuracy": 0.48974609375,
        "source_A_all_correct": 0.2373046875,
        "source_B_all_correct": 0.2392578125,
        "pair_set_accuracy_by_position": [
          0.84375,
          0.2353515625,
          0.2353515625
        ],
        "overlap_pair_set_accuracy": 0.2353515625,
        "source_swap_rate_given_pair_recovered": 0.11617100371747212,
        "loss": 1.1046511381864548
      }
    },
    {
      "encoder": "encodec",
      "kind": "single",
      "test": {
        "digit_accuracy": 0.9625651041666666,
        "all_labeled_correct": 0.89794921875,
        "digit_accuracy_by_position": [
          0.96044921875,
          0.9619140625,
          0.96533203125
        ],
        "overlap_digit_accuracy": 0.963623046875,
        "loss": 0.18871454487089068
      }
    },
    {
      "encoder": "encodec",
      "kind": "oracle",
      "test": {
        "digit_accuracy": 0.95263671875,
        "all_labeled_correct": 0.76171875,
        "digit_accuracy_by_position": [
          0.95849609375,
          0.9482421875,
          0.951171875
        ],
        "overlap_digit_accuracy": 0.94970703125,
        "source_A_all_correct": 0.8701171875,
        "source_B_all_correct": 0.8798828125,
        "pair_set_accuracy_by_position": [
          0.9189453125,
          0.8994140625,
          0.90625
        ],
        "overlap_pair_set_accuracy": 0.90283203125,
        "source_swap_rate_given_pair_recovered": 0.0,
        "loss": 0.22563361190259457
      }
    },
    {
      "encoder": "speech",
      "kind": "mix_pre",
      "test": {
        "digit_accuracy": 0.6769205729166666,
        "all_labeled_correct": 0.0283203125,
        "digit_accuracy_by_position": [
          0.966796875,
          0.53759765625,
          0.5263671875
        ],
        "overlap_digit_accuracy": 0.531982421875,
        "source_A_all_correct": 0.2939453125,
        "source_B_all_correct": 0.2802734375,
        "pair_set_accuracy_by_position": [
          0.93359375,
          0.2587890625,
          0.208984375
        ],
        "overlap_pair_set_accuracy": 0.23388671875,
        "source_swap_rate_given_pair_recovered": 0.12147887323943662,
        "loss": 0.7358837760984898
      }
    },
    {
      "encoder": "speech",
      "kind": "mix_post",
      "test": {
        "digit_accuracy": 0.6691080729166666,
        "all_labeled_correct": 0.01171875,
        "digit_accuracy_by_position": [
          0.9619140625,
          0.52734375,
          0.51806640625
        ],
        "overlap_digit_accuracy": 0.522705078125,
        "source_A_all_correct": 0.279296875,
        "source_B_all_correct": 0.2666015625,
        "pair_set_accuracy_by_position": [
          0.92578125,
          0.185546875,
          0.1240234375
        ],
        "overlap_pair_set_accuracy": 0.15478515625,
        "source_swap_rate_given_pair_recovered": 0.053830227743271224,
        "loss": 0.8109694086015224
      }
    },
    {
      "encoder": "speech",
      "kind": "single",
      "test": {
        "digit_accuracy": 0.98779296875,
        "all_labeled_correct": 0.9658203125,
        "digit_accuracy_by_position": [
          0.98974609375,
          0.98681640625,
          0.98681640625
        ],
        "overlap_digit_accuracy": 0.98681640625,
        "loss": 0.06268280348444932
      }
    },
    {
      "encoder": "speech",
      "kind": "oracle",
      "test": {
        "digit_accuracy": 0.9850260416666666,
        "all_labeled_correct": 0.9208984375,
        "digit_accuracy_by_position": [
          0.986328125,
          0.9873046875,
          0.9814453125
        ],
        "overlap_digit_accuracy": 0.984375,
        "source_A_all_correct": 0.96484375,
        "source_B_all_correct": 0.955078125,
        "pair_set_accuracy_by_position": [
          0.97265625,
          0.974609375,
          0.9638671875
        ],
        "overlap_pair_set_accuracy": 0.96923828125,
        "source_swap_rate_given_pair_recovered": 0.0,
        "loss": 0.06731334910728037
      }
    },
    {
      "encoder": "encodec_low",
      "kind": "mix_post",
      "test": {
        "digit_accuracy": 0.607421875,
        "all_labeled_correct": 0.0146484375,
        "digit_accuracy_by_position": [
          0.8798828125,
          0.47314453125,
          0.46923828125
        ],
        "overlap_digit_accuracy": 0.47119140625,
        "source_A_all_correct": 0.21484375,
        "source_B_all_correct": 0.216796875,
        "pair_set_accuracy_by_position": [
          0.78515625,
          0.17578125,
          0.1865234375
        ],
        "overlap_pair_set_accuracy": 0.18115234375,
        "source_swap_rate_given_pair_recovered": 0.09440175631174534,
        "loss": 1.0983734652400017
      }
    },
    {
      "encoder": "speech_low",
      "kind": "mix_post",
      "test": {
        "digit_accuracy": 0.6650390625,
        "all_labeled_correct": 0.01171875,
        "digit_accuracy_by_position": [
          0.96044921875,
          0.52197265625,
          0.5126953125
        ],
        "overlap_digit_accuracy": 0.517333984375,
        "source_A_all_correct": 0.259765625,
        "source_B_all_correct": 0.2841796875,
        "pair_set_accuracy_by_position": [
          0.9228515625,
          0.150390625,
          0.1142578125
        ],
        "overlap_pair_set_accuracy": 0.13232421875,
        "source_swap_rate_given_pair_recovered": 0.03820960698689956,
        "loss": 0.8428547792136669
      }
    },
    {
      "encoder": "fire",
      "kind": "mix_post",
      "test": {
        "digit_accuracy": 0.9381510416666666,
        "all_labeled_correct": 0.7666015625,
        "digit_accuracy_by_position": [
          0.99462890625,
          0.9326171875,
          0.88720703125
        ],
        "overlap_digit_accuracy": 0.909912109375,
        "source_A_all_correct": 0.8271484375,
        "source_B_all_correct": 0.8427734375,
        "pair_set_accuracy_by_position": [
          0.9931640625,
          0.931640625,
          0.908203125
        ],
        "overlap_pair_set_accuracy": 0.919921875,
        "source_swap_rate_given_pair_recovered": 0.0387121502491376,
        "loss": 0.3255199147388339
      }
    },
    {
      "encoder": "fire",
      "kind": "mix_pre",
      "test": {
        "digit_accuracy": 0.9651692708333334,
        "all_labeled_correct": 0.8544921875,
        "digit_accuracy_by_position": [
          0.99462890625,
          0.958984375,
          0.94189453125
        ],
        "overlap_digit_accuracy": 0.950439453125,
        "source_A_all_correct": 0.9033203125,
        "source_B_all_correct": 0.908203125,
        "pair_set_accuracy_by_position": [
          0.9912109375,
          0.951171875,
          0.94140625
        ],
        "overlap_pair_set_accuracy": 0.9462890625,
        "source_swap_rate_given_pair_recovered": 0.017675817976682964,
        "loss": 0.20056041842326522
      }
    },
    {
      "encoder": "fire",
      "kind": "oracle",
      "test": {
        "digit_accuracy": 0.9964192708333334,
        "all_labeled_correct": 0.978515625,
        "digit_accuracy_by_position": [
          0.998046875,
          0.99267578125,
          0.99853515625
        ],
        "overlap_digit_accuracy": 0.99560546875,
        "source_A_all_correct": 0.9853515625,
        "source_B_all_correct": 0.9931640625,
        "pair_set_accuracy_by_position": [
          0.99609375,
          0.9853515625,
          0.9970703125
        ],
        "overlap_pair_set_accuracy": 0.9912109375,
        "source_swap_rate_given_pair_recovered": 0.0,
        "loss": 0.0165016592181928
      }
    },
    {
      "encoder": "fire",
      "kind": "single",
      "test": {
        "digit_accuracy": 0.9978841145833334,
        "all_labeled_correct": 0.99365234375,
        "digit_accuracy_by_position": [
          0.9990234375,
          0.99560546875,
          0.9990234375
        ],
        "overlap_digit_accuracy": 0.997314453125,
        "loss": 0.013642147801874671
      }
    },
    {
      "encoder": "qwen",
      "kind": "mix_post",
      "test": {
        "digit_accuracy": 0.982421875,
        "all_labeled_correct": 0.912109375,
        "digit_accuracy_by_position": [
          0.99462890625,
          0.9755859375,
          0.97705078125
        ],
        "overlap_digit_accuracy": 0.976318359375,
        "source_A_all_correct": 0.9453125,
        "source_B_all_correct": 0.9541015625,
        "pair_set_accuracy_by_position": [
          0.9892578125,
          0.9580078125,
          0.9697265625
        ],
        "overlap_pair_set_accuracy": 0.9638671875,
        "source_swap_rate_given_pair_recovered": 0.004093784890212133,
        "loss": 0.10126270609907806
      }
    },
    {
      "encoder": "qwen",
      "kind": "mix_pre",
      "test": {
        "digit_accuracy": 0.9765625,
        "all_labeled_correct": 0.8984375,
        "digit_accuracy_by_position": [
          0.99560546875,
          0.9697265625,
          0.96435546875
        ],
        "overlap_digit_accuracy": 0.967041015625,
        "source_A_all_correct": 0.935546875,
        "source_B_all_correct": 0.9365234375,
        "pair_set_accuracy_by_position": [
          0.9912109375,
          0.9599609375,
          0.958984375
        ],
        "overlap_pair_set_accuracy": 0.95947265625,
        "source_swap_rate_given_pair_recovered": 0.009317927692881103,
        "loss": 0.13470982806757092
      }
    },
    {
      "encoder": "qwen",
      "kind": "oracle",
      "test": {
        "digit_accuracy": 0.9986979166666666,
        "all_labeled_correct": 0.9921875,
        "digit_accuracy_by_position": [
          0.9990234375,
          0.998046875,
          0.9990234375
        ],
        "overlap_digit_accuracy": 0.99853515625,
        "source_A_all_correct": 0.998046875,
        "source_B_all_correct": 0.994140625,
        "pair_set_accuracy_by_position": [
          0.998046875,
          0.99609375,
          0.998046875
        ],
        "overlap_pair_set_accuracy": 0.9970703125,
        "source_swap_rate_given_pair_recovered": 0.0,
        "loss": 0.009229176979715703
      }
    },
    {
      "encoder": "qwen",
      "kind": "single",
      "test": {
        "digit_accuracy": 0.9986979166666666,
        "all_labeled_correct": 0.99609375,
        "digit_accuracy_by_position": [
          0.99853515625,
          0.99853515625,
          0.9990234375
        ],
        "overlap_digit_accuracy": 0.998779296875,
        "loss": 0.011297753202825334
      }
    }
  ],
  "counterfactual": [
    {
      "encoder": "fire",
      "mode": "B0",
      "B_last_new_target_accuracy": 0.7034505208333334,
      "A_regression_given_old_A_all_correct": 0.3084687910891836,
      "A_digit_accuracy_before": 0.8670789930555555,
      "A_digit_accuracy_after": 0.8607855902777778,
      "A_prediction_unchanged": 0.8076171875
    },
    {
      "encoder": "fire",
      "mode": "B1",
      "B_last_new_target_accuracy": 0.7184244791666666,
      "A_regression_given_old_A_all_correct": 0.25018877404536316,
      "A_digit_accuracy_before": 0.8794487847222223,
      "A_digit_accuracy_after": 0.8755425347222222,
      "A_prediction_unchanged": 0.8297526041666666
    },
    {
      "encoder": "fire",
      "mode": "B2",
      "B_last_new_target_accuracy": 0.8727213541666666,
      "A_regression_given_old_A_all_correct": 0.11766611643835169,
      "A_digit_accuracy_before": 0.9344618055555557,
      "A_digit_accuracy_after": 0.932400173611111,
      "A_prediction_unchanged": 0.9096137152777777
    },
    {
      "encoder": "qwen",
      "mode": "B0",
      "B_last_new_target_accuracy": 0.6953125,
      "A_regression_given_old_A_all_correct": 0.3186925464163058,
      "A_digit_accuracy_before": 0.8046875,
      "A_digit_accuracy_after": 0.8012152777777777,
      "A_prediction_unchanged": 0.4557291666666667
    },
    {
      "encoder": "qwen",
      "mode": "B1",
      "B_last_new_target_accuracy": 0.9033203125,
      "A_regression_given_old_A_all_correct": 0.10316477875157182,
      "A_digit_accuracy_before": 0.9254557291666666,
      "A_digit_accuracy_after": 0.9307725694444443,
      "A_prediction_unchanged": 0.7874348958333334
    },
    {
      "encoder": "qwen",
      "mode": "B2",
      "B_last_new_target_accuracy": 0.970703125,
      "A_regression_given_old_A_all_correct": 0.02837498340975139,
      "A_digit_accuracy_before": 0.9731987847222223,
      "A_digit_accuracy_after": 0.9768880208333334,
      "A_prediction_unchanged": 0.9228515625
    },
    {
      "encoder": "wavlm",
      "mode": "B0",
      "B_last_new_target_accuracy": 0.494140625,
      "A_regression_given_old_A_all_correct": 0.44895876701034293,
      "A_digit_accuracy_before": 0.7064887152777777,
      "A_digit_accuracy_after": 0.6990017361111112,
      "A_prediction_unchanged": 0.2897135416666667,
      "old_A_all_correct_counts": [
        349,
        351,
        349
      ]
    },
    {
      "encoder": "wavlm",
      "mode": "B1",
      "B_last_new_target_accuracy": 0.4964192708333333,
      "A_regression_given_old_A_all_correct": 0.4135822532731284,
      "A_digit_accuracy_before": 0.7210286458333334,
      "A_digit_accuracy_after": 0.7260199652777778,
      "A_prediction_unchanged": 0.3238932291666667,
      "old_A_all_correct_counts": [
        411,
        347,
        372
      ]
    },
    {
      "encoder": "wavlm",
      "mode": "B2",
      "B_last_new_target_accuracy": 0.52734375,
      "A_regression_given_old_A_all_correct": 0.35592239161525635,
      "A_digit_accuracy_before": 0.7192925347222223,
      "A_digit_accuracy_after": 0.7195095486111112,
      "A_prediction_unchanged": 0.3365885416666667,
      "old_A_all_correct_counts": [
        357,
        448,
        331
      ]
    },
    {
      "encoder": "wavlm_mid",
      "mode": "B0",
      "B_last_new_target_accuracy": 0.5143229166666666,
      "A_regression_given_old_A_all_correct": 0.4210357224150831,
      "A_digit_accuracy_before": 0.7153862847222223,
      "A_digit_accuracy_after": 0.7171223958333334,
      "A_prediction_unchanged": 0.310546875,
      "old_A_all_correct_counts": [
        338,
        408,
        341
      ]
    },
    {
      "encoder": "wavlm_mid",
      "mode": "B1",
      "B_last_new_target_accuracy": 0.5537109375,
      "A_regression_given_old_A_all_correct": 0.3625654823783608,
      "A_digit_accuracy_before": 0.7535807291666666,
      "A_digit_accuracy_after": 0.7544487847222223,
      "A_prediction_unchanged": 0.3733723958333333,
      "old_A_all_correct_counts": [
        420,
        414,
        474
      ]
    },
    {
      "encoder": "wavlm_mid",
      "mode": "B2",
      "B_last_new_target_accuracy": 0.6471354166666666,
      "A_regression_given_old_A_all_correct": 0.30593165380262816,
      "A_digit_accuracy_before": 0.7922092013888888,
      "A_digit_accuracy_after": 0.7935112847222223,
      "A_prediction_unchanged": 0.44921875,
      "old_A_all_correct_counts": [
        421,
        394,
        728
      ]
    },
    {
      "encoder": "encodec",
      "mode": "B0",
      "B_last_new_target_accuracy": 0.4664713541666667,
      "A_regression_given_old_A_all_correct": 0.3911378627535833,
      "A_digit_accuracy_before": 0.6124131944444444,
      "A_digit_accuracy_after": 0.6066623263888888,
      "A_prediction_unchanged": 0.2884114583333333,
      "old_A_all_correct_counts": [
        229,
        229,
        222
      ]
    },
    {
      "encoder": "encodec",
      "mode": "B1",
      "B_last_new_target_accuracy": 0.4583333333333333,
      "A_regression_given_old_A_all_correct": 0.43051438244735624,
      "A_digit_accuracy_before": 0.6222873263888888,
      "A_digit_accuracy_after": 0.6121961805555555,
      "A_prediction_unchanged": 0.2802734375,
      "old_A_all_correct_counts": [
        259,
        227,
        214
      ]
    },
    {
      "encoder": "encodec",
      "mode": "B2",
      "B_last_new_target_accuracy": 0.451171875,
      "A_regression_given_old_A_all_correct": 0.4753256150897552,
      "A_digit_accuracy_before": 0.6014539930555556,
      "A_digit_accuracy_after": 0.591579861111111,
      "A_prediction_unchanged": 0.2581380208333333,
      "old_A_all_correct_counts": [
        248,
        202,
        197
      ]
    },
    {
      "encoder": "speech",
      "mode": "B0",
      "B_last_new_target_accuracy": 0.5026041666666666,
      "A_regression_given_old_A_all_correct": 0.5093255259162871,
      "A_digit_accuracy_before": 0.6671006944444445,
      "A_digit_accuracy_after": 0.6534288194444445,
      "A_prediction_unchanged": 0.23372395833333334,
      "old_A_all_correct_counts": [
        290,
        270,
        265
      ]
    },
    {
      "encoder": "speech",
      "mode": "B1",
      "B_last_new_target_accuracy": 0.5091145833333334,
      "A_regression_given_old_A_all_correct": 0.47075508237642527,
      "A_digit_accuracy_before": 0.6710069444444443,
      "A_digit_accuracy_after": 0.6628689236111112,
      "A_prediction_unchanged": 0.2490234375,
      "old_A_all_correct_counts": [
        291,
        278,
        265
      ]
    },
    {
      "encoder": "speech",
      "mode": "B2",
      "B_last_new_target_accuracy": 0.501953125,
      "A_regression_given_old_A_all_correct": 0.4453494521231869,
      "A_digit_accuracy_before": 0.6615668402777778,
      "A_digit_accuracy_after": 0.667209201388889,
      "A_prediction_unchanged": 0.2633463541666667,
      "old_A_all_correct_counts": [
        268,
        284,
        256
      ]
    },
    {
      "encoder": "encodec_low",
      "mode": "B0",
      "B_last_new_target_accuracy": 0.4332682291666667,
      "A_regression_given_old_A_all_correct": 0.411018952006347,
      "A_digit_accuracy_before": 0.5807291666666666,
      "A_digit_accuracy_after": 0.5747612847222222,
      "A_prediction_unchanged": 0.2727864583333333,
      "old_A_all_correct_counts": [
        202,
        201,
        188
      ]
    },
    {
      "encoder": "encodec_low",
      "mode": "B2",
      "B_last_new_target_accuracy": 0.4339192708333333,
      "A_regression_given_old_A_all_correct": 0.44189839599987524,
      "A_digit_accuracy_before": 0.5753038194444445,
      "A_digit_accuracy_after": 0.5732421875,
      "A_prediction_unchanged": 0.2581380208333333,
      "old_A_all_correct_counts": [
        183,
        166,
        190
      ]
    },
    {
      "encoder": "speech_low",
      "mode": "B0",
      "B_last_new_target_accuracy": 0.4759114583333333,
      "A_regression_given_old_A_all_correct": 0.5272190170304724,
      "A_digit_accuracy_before": 0.646484375,
      "A_digit_accuracy_after": 0.6416015625,
      "A_prediction_unchanged": 0.22135416666666666,
      "old_A_all_correct_counts": [
        258,
        255,
        253
      ]
    },
    {
      "encoder": "speech_low",
      "mode": "B2",
      "B_last_new_target_accuracy": 0.5110677083333334,
      "A_regression_given_old_A_all_correct": 0.4302907726091829,
      "A_digit_accuracy_before": 0.6613498263888888,
      "A_digit_accuracy_after": 0.658420138888889,
      "A_prediction_unchanged": 0.27734375,
      "old_A_all_correct_counts": [
        267,
        282,
        268
      ]
    }
  ],
  "rates": [
    {
      "encoder": "encodec",
      "frames": 285,
      "codebooks": 8,
      "vocabulary_per_codebook": 1024,
      "scalar_ids": 2280,
      "nominal_payload_bits": 22800,
      "bitpacked_minimum_bytes": 2850,
      "nominal_kbps": 6.0,
      "native_feature_width": 128,
      "lookup_sum_cache_bytes_per_example": 72960,
      "note": "Fixed-length 10-bit IDs, excludes shared model/codebook/header; quantizer lookup and sum reconstruct latents only, not audio. No entropy model is used."
    },
    {
      "encoder": "encodec_low",
      "frames": 285,
      "codebooks": 2,
      "vocabulary_per_codebook": 1024,
      "scalar_ids": 570,
      "nominal_payload_bits": 5700,
      "bitpacked_minimum_bytes": 713,
      "nominal_kbps": 1.5,
      "native_feature_width": 128,
      "lookup_sum_cache_bytes_per_example": 72960,
      "note": "Fixed-length 10-bit IDs, excludes shared model/codebook/header; quantizer lookup and sum reconstruct latents only, not audio. No entropy model is used."
    },
    {
      "encoder": "speech",
      "frames": 190,
      "codebooks": 8,
      "vocabulary_per_codebook": 1024,
      "scalar_ids": 1520,
      "nominal_payload_bits": 15200,
      "bitpacked_minimum_bytes": 1900,
      "nominal_kbps": 4.0,
      "native_feature_width": 1024,
      "lookup_sum_cache_bytes_per_example": 389120,
      "note": "Fixed-length 10-bit IDs, excludes shared model/codebook/header; quantizer lookup and sum reconstruct latents only, not audio. No entropy model is used."
    },
    {
      "encoder": "speech_low",
      "frames": 190,
      "codebooks": 1,
      "vocabulary_per_codebook": 1024,
      "scalar_ids": 190,
      "nominal_payload_bits": 1900,
      "bitpacked_minimum_bytes": 238,
      "nominal_kbps": 0.5,
      "native_feature_width": 1024,
      "lookup_sum_cache_bytes_per_example": 389120,
      "note": "Fixed-length 10-bit IDs, excludes shared model/codebook/header; quantizer lookup and sum reconstruct latents only, not audio. No entropy model is used."
    }
  ],
  "weights": {
    "wavlm": {
      "repo": "microsoft/wavlm-base-plus",
      "revision": "4c66d4806a428f2e922ccfa1a962776e232d487b"
    },
    "encodec": {
      "repo": "facebook/encodec_24khz",
      "revision": "c1dbe2ae3f1de713481a3b3e7c47f357092ee040"
    },
    "speech": {
      "repo": "fnlp/SpeechTokenizer",
      "revision": "4d54939beef00572fa7bfe41ee35a335c3732f51"
    }
  },
  "live": [
    {
      "encoder": "wavlm",
      "ms_per_example": 14.378152229861977,
      "peak_allocated_GiB": 0.43927860260009766,
      "cached_live_feature_max_abs_difference": 0.0,
      "cached_live_logit_max_abs_difference": 0.0
    },
    {
      "encoder": "wavlm_mid",
      "ms_per_example": 14.105016646984344,
      "peak_allocated_GiB": 0.43988895416259766,
      "cached_live_feature_max_abs_difference": 0.0,
      "cached_live_logit_max_abs_difference": 0.0
    },
    {
      "encoder": "encodec",
      "ms_per_example": 20.346269448054954,
      "peak_allocated_GiB": 0.11897850036621094,
      "cached_live_feature_max_abs_difference": 0.0,
      "cached_live_logit_max_abs_difference": 0.0
    },
    {
      "encoder": "speech",
      "ms_per_example": 53.794098688134305,
      "peak_allocated_GiB": 0.6304221153259277,
      "cached_live_feature_max_abs_difference": 0.0,
      "cached_live_logit_max_abs_difference": 0.0
    }
  ],
  "layer_validation": {
    "mix_pre": 0.8802083333333334,
    "mix_post": 0.7639973958333334
  },
  "audit": {
    "compressed_arrays": 174,
    "packed_code_files": 4,
    "exact_tensor_replay": true,
    "exact_id_roundtrip": true,
    "training_wall_minutes": 162.75604137182236,
    "source_analysis_sha256": "70901c0e39c94cc8b8b579d3b182ff7ac72640cba77ea72de23e3028b93823f0"
  }
};
